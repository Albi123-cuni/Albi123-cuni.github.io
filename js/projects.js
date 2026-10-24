// To add a project, add an object here. `category` must match a filter button in index.html,
// `color` is the background behind the screenshot.
const PROJECTS = [
  {
    id: 'nm-north',
    color: '#1f3a6e',
    title: 'NM North Construction',
    type: 'Client website',
    category: 'web',
    year: '2025',
    image: 'assets/img/projects/nm-north.jpg',
    summary: 'A multi-page website for a construction and renovation company.',
    description:
      'I designed and built the company website from scratch: a home page, a list of services, a gallery of finished projects and a contact page. It was hosted on GitHub Pages under the company\'s own domain.',
    highlights: [
      'Four pages: home, services, project gallery and contact',
      'Custom domain connected through GitHub Pages',
      'Meta description and Google Search Console verification so it shows up in search',
    ],
    stack: ['HTML', 'CSS', 'GitHub Pages'],
    links: [
      { label: 'Source code', url: 'https://github.com/Albi123-cuni/NMNorthConstructionLTD' },
    ],
  },
  {
    id: 'inventory',
    color: '#232b3d',
    title: 'Inventory & Order Management',
    type: 'Full-stack app',
    category: 'fullstack',
    year: '2026',
    image: 'assets/img/projects/inventory-system.svg',
    summary: 'Stock, orders and payments with separate admin, staff and client access.',
    description:
      'A complete system for running a shop\'s stock and orders. Admins and staff manage products, suppliers, clients and orders from a dashboard. Clients log in to their own portal, pay pending orders and see their invoices.',
    highlights: [
      'JWT login with three roles (admin, staff, client); passwords hashed with bcrypt',
      'Normalised SQLite schema: 8 tables with foreign keys and cascade deletes',
      'Orders run inside a transaction, so stock goes down automatically',
      'Background logging and a third-party weather API on the dashboard',
    ],
    stack: ['React', 'React Router', 'Node.js', 'Express', 'SQLite'],
    links: [
      { label: 'Source code', url: 'https://github.com/Albi123-cuni/Ecommerce_Database-Backend-Frontend' },
    ],
  },
  {
    id: 'store',
    color: '#5146c9',
    title: 'Online Store',
    type: 'React front end',
    category: 'web',
    year: '2026',
    image: 'assets/img/projects/online-store.jpg',
    summary: 'A shop with search, cart, wishlist, checkout and user profiles.',
    description:
      'Built for my school practice project. A single-page React shop with its own pages for the store, cart, wishlist, checkout and profile. Account pages sit behind a login and checkout goes through PayPal.',
    highlights: [
      'Navbar split into small reusable components (search, cart, wishlist, mobile menu)',
      'Login-protected routes with React Router',
      'Cart and wishlist kept in localStorage',
      'PayPal checkout using the official React SDK',
    ],
    stack: ['React', 'React Router', 'Vite', 'PayPal SDK'],
    links: [
      { label: 'Source code', url: 'https://github.com/Albi123-cuni/Projekti-i-Praktikes' },
    ],
  },
  {
    id: 'finance',
    color: '#2b4a5e',
    title: 'Finance Tracker',
    type: 'Web app',
    category: 'web',
    year: '2025',
    image: 'assets/img/projects/finance-tracker.jpg',
    summary: 'Income, expenses and balance with a spending chart and custom themes.',
    description:
      'A dashboard that adds up income, expenses and balance as you enter transactions, and charts spending by category. Data stays in the browser, so there is no account to create. The settings page lets you change the background, accent colour, font size and light or dark mode.',
    highlights: [
      'Live totals and an expenses-by-category chart',
      'Transactions and settings saved in localStorage',
      'Eight background themes, including an animated Matrix rain',
    ],
    stack: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
    links: [
      { label: 'Open the app', url: 'https://albi123-cuni.github.io/Finance-Tracker-/' },
      { label: 'Source code', url: 'https://github.com/Albi123-cuni/Finance-Tracker-' },
    ],
  },
  {
    id: 'game-system',
    color: '#3b2f5c',
    title: 'Server-Authoritative Game System',
    type: 'Multiplayer networking',
    category: 'games',
    year: '2024 – 2025',
    image: 'assets/img/projects/game-system.svg',
    summary: 'Multiplayer architecture where the server checks every action.',
    description:
      'A multiplayer networking architecture built around real-time physics and latency. The server owns the game state and validates the data clients send, which keeps client–server communication secure. Built in Roblox Studio; I have also explored Unreal Engine 5.',
    highlights: [
      'Server-side validation of everything clients send',
      'Real-time physics simulation shared between players',
      'Designed with network latency in mind',
    ],
    stack: ['Roblox Studio', 'Luau'],
    links: [],
  },
  {
    id: 'energy-ball',
    color: '#6e3128',
    title: 'Energy Ball',
    type: 'Roblox game',
    category: 'games',
    year: 'First project',
    image: 'assets/img/projects/energy-ball.svg',
    summary: 'Every player gets an energy ball that follows them and blocks attacks.',
    description:
      'The game that got me into programming. Once the ball could move, it started attacking its own player, because nothing told it who it belonged to. I gave every ball an Owner reference and looked at team tags as another option. It was the first time I had to think about how parts of a program relate to each other, not just whether each line runs.',
    highlights: [
      'Owner reference so each ball can tell its player from opponents',
      'Scripts organised so separate systems don\'t interfere with each other',
    ],
    stack: ['Roblox Studio', 'Luau'],
    links: [
      { label: 'Play on Roblox', url: 'https://www.roblox.com/share?code=8753bfe769a2734f963c83bf414c25b5&type=ExperienceDetails&stamp=1790883452292' },
    ],
  },
  {
    id: 'photo-fetcher',
    color: '#2d5b4e',
    title: 'Photo Fetcher',
    type: 'API project',
    category: 'web',
    year: '2026',
    image: 'assets/img/projects/photo-fetcher.jpg',
    summary: 'A photo gallery that loads images from the Lorem Picsum API.',
    description:
      'Loads a fresh set of photos from the Lorem Picsum API, shows each one with its author and original link, and can switch the whole gallery to grayscale.',
    highlights: [
      'Fetches and renders data from a public REST API',
      'One switch turns the whole gallery grayscale',
    ],
    stack: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    links: [
      { label: 'Source code', url: 'https://github.com/Albi123-cuni/PhotoFetcher-Api' },
    ],
  },
];
