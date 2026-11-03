# Healveda 🌿☕

> **Healveda** is an artisanal wellness and heritage tea brand platform crafted to celebrate the timeless rituals, stories, and regional flavors of Indian chai. From the bustling lanes of Charminar to the misty hills of Idukki and the sacred ghats of Varanasi, Healveda blends ancient wellness with mindful modern lifestyle.

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Signature Collection](#signature-collection)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Scripts](#scripts)
- [Typography & Styling](#typography--styling)
- [License](#license)

---

## 🌿 About The Project

Healveda is a React web application designed with an earthy, warm aesthetic that evokes heritage, warmth, and slow living. It serves as an interactive catalog and storytelling platform for regional wellness chai blends, guiding visitors through:
- The philosophy behind ancient Ayurvedic herbs and whole spices.
- Authentic tales that link each blend to its cultural landscape.
- Ritualistic brewing and wellness insights.

---

## ✨ Key Features

- **Interactive Hero & Brand Storytelling**: Engaging hero section highlighting the soul and origins of Healveda.
- **Stacked Cards Ritual Carousel**: Smooth gesture/touch and click-driven stacked card gallery to explore signature daily chai rituals.
- **Regional Product Showcase**: Beautifully presented blends featuring origin stories, taste notes, and mood profiles.
- **Journal & Blog**: Informative wellness guides, mindfulness articles, and deep dives with dedicated blog item pages (`/blog/:id`).
- **Contact & Inquiries**: Easy-to-use contact form for inquiries, collaborations, and community interactions.
- **Responsive & Elegant Design**: Styled with custom editorial typography (*The Seasons*), warm natural palettes, and seamless mobile responsiveness.
- **Smooth Page Transitions**: Automatic scroll-to-top routing with React Router.

---

## 🍵 Signature Collection

| Blend | Regional Heritage | Profile |
| :--- | :--- | :--- |
| **Deccan Cinnamon Dum Chai** | *Hyderabad* | Slow-brewed warmth with rich cinnamon, inspired by quiet corners near Charminar. |
| **Idukki Valley Cardamom Chai** | *Idukki, Kerala* | Fresh, aromatic green cardamom from misty mountain valleys. |
| **India's Herbal Chai** | *Varanasi* | Pure Ayurvedic herbs and botanicals inspired by timeless ghats. |
| **Desi Masala Chai** | *Delhi* | Bold, aromatic whole spices celebrating the vibrant heritage of old cities. |

---

## 🛠 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS with custom design tokens, responsive flexbox & grid
- **Typography**: *The Seasons* (Custom luxury serif font family)
- **Tooling**: Create React App / `react-scripts`

---

## 📁 Project Structure

```text
healveda/
├── public/                 # Static assets, icons, HTML template
│   ├── favIcon.svg
│   ├── logoHeader.svg
│   └── index.html
├── src/
│   ├── assests/            # Images, branding icons, and font files
│   │   ├── fonts/          # The Seasons font family & font-face declarations
│   │   └── ...
│   ├── components/         # Modular React components
│   │   ├── Blog/           # Journal/Blog listing page
│   │   ├── BlogItem/       # Individual blog post article view
│   │   ├── Contact/        # Contact form & social connections
│   │   ├── Footer/         # Brand footer with navigation & links
│   │   ├── Home/           # Landing page with hero & story sections
│   │   ├── Navbar/         # Header navigation bar
│   │   ├── Products/       # Product catalog & details
│   │   ├── ScrollToTop.js  # Route change scroll reset handler
│   │   └── StackedCardsSection/ # Interactive stacked card slider
│   ├── App.css             # Root application styles
│   ├── App.js              # Route configuration & page wrapper
│   ├── index.css           # Global typography & base styles
│   └── index.js            # React root mount
├── package.json            # Project dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v16 or higher recommended) and **npm** installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/seshu362/Healveda.git
   cd Healveda
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```
The application will open automatically at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The bundled files will be generated in the `build/` directory, ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode with hot reloading. |
| `npm run build` | Builds the static production package into `build/`. |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run eject` | Ejects from Create React App (irreversible). |

---

## 🎨 Typography & Styling

The project features a tailored editorial feel utilizing:
- **Font Family**: *The Seasons* (Light, Regular, Bold, and Italic variants stored in `src/assests/fonts/`).
- **Color Palette**: Warm terracotta, earthy olive, soothing cream, and deep herbal browns reflecting natural spices and Ayurvedic herbs.

---

## 📄 License

This project is licensed under the MIT License - feel free to use and adapt it for personal or commercial projects.
