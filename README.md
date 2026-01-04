# Portfolio App

A personal portfolio built with [Next.js](https://nextjs.org/) and TypeScript that showcases projects, skills and a contact form with rich animations.

## Features
- Responsive design styled with **Tailwind CSS** and dark/light theme toggle stored in `localStorage`.
- Animated hero section with custom SVG background and a typing effect.
- Reusable `ScrollAnimation` and `AnimatedBackground` components powered by **Framer Motion**.
- Projects section that fetches repositories from the GitHub API and highlights featured projects with animated cards.
- Skills section with tabbed categories, glitch icons and project filtering based on selected skills.
- Contact form with validation and submission to **Firebase Firestore**, plus animated feedback and social links.
- **Lucide-react** icon set and various glitch/hover effects across the UI.

## Tech Stack
- **Framework**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, tailwindcss-animate, tw-elements, clsx
- **Animations**: motion / Framer Motion
- **Icons**: lucide-react
- **Data**: GitHub REST API, Firebase
- **Effects**: typewriter-effect

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Open <http://localhost:3000> in your browser.
3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Scripts
- `npm run dev` – Run the development server
- `npm run build` – Create a production build
- `npm start` – Start the production server
- `npm run lint` – Lint the project

## Deployment
Deploy the app to any Node.js hosting platform. [Vercel](https://vercel.com/) offers seamless deployment for Next.js applications.