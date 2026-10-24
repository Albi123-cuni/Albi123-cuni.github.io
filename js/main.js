const root = document.documentElement;
const grid = document.getElementById('projects');
const filterButtons = document.querySelectorAll('.filter');
const modal = document.getElementById('project-modal');


function isDark() {
  if (root.dataset.theme) return root.dataset.theme === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

document.querySelector('.theme-btn').addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});


function createStack(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function renderProjects() {
  grid.innerHTML = PROJECTS.map((project) => `
    <button class="project" type="button" data-id="${project.id}" data-category="${project.category}" data-reveal style="--tint: ${project.color}">
      <div class="project__image">
        <img src="${project.image}" alt="Screenshot of ${project.title}" loading="lazy">
      </div>
      <div class="project__info">
        <p class="project__meta">${project.type} · ${project.year}</p>
        <h3 class="project__title">${project.title}</h3>
        <p class="project__summary">${project.summary}</p>
        <ul class="stack">${createStack(project.stack)}</ul>
      </div>
    </button>
  `).join('');

  updateFeatured();
}

// The first visible card always gets the wide layout, whatever the filter.
function updateFeatured() {
  const cards = [...grid.querySelectorAll('.project')];
  const firstVisible = cards.find((card) => !card.hidden);
  cards.forEach((card) => card.classList.toggle('project--featured', card === firstVisible));
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.classList.toggle('is-active', b === button));
    grid.querySelectorAll('.project').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });

    updateFeatured();
  });
});


function openProject(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;

  modal.style.setProperty('--tint', project.color);
  modal.querySelector('.modal__image').src = project.image;
  modal.querySelector('.modal__image').alt = `Screenshot of ${project.title}`;
  modal.querySelector('.modal__meta').textContent = `${project.type} · ${project.year}`;
  modal.querySelector('.modal__title').textContent = project.title;
  modal.querySelector('.modal__description').textContent = project.description;
  modal.querySelector('.modal__highlights').innerHTML = createStack(project.highlights);
  modal.querySelector('.stack').innerHTML = createStack(project.stack);
  modal.querySelector('.modal__links').innerHTML = project.links.map((link, i) => `
    <a class="btn ${i === 0 ? 'btn--primary' : 'btn--secondary'}" href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>
  `).join('');

  modal.showModal();
  modal.scrollTop = 0;
}

grid.addEventListener('click', (event) => {
  const card = event.target.closest('.project');
  if (card) openProject(card.dataset.id);
});

modal.querySelector('.modal__close').addEventListener('click', () => modal.close());

// Clicking the dark backdrop (outside the dialog box) closes it.
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -10% 0px' });


// The strip scrolls by half its width, so it needs a second copy to loop without a gap.
const marqueeTrack = document.querySelector('.marquee__track');
marqueeTrack.innerHTML += marqueeTrack.innerHTML;
[...marqueeTrack.children].slice(marqueeTrack.children.length / 2)
  .forEach((item) => item.setAttribute('aria-hidden', 'true'));


renderProjects();
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
