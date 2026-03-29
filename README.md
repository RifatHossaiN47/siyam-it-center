# Siyam IT Center 🚀

A modern, responsive, and multilingual website for an IT and Service Agency, built with Next.js (App Router), React 19, Tailwind CSS V4, and Framer Motion. 

This website provides a comprehensive digital storefront for the center's real-world services such as Visa processing, NID services, e-TIN, Passport/Studio Photography, Air Ticket booking, and more.

## 🌟 Features

- **Multilingual Support**: Built-in support for multiple languages using `react-i18next`.
- **Modern Animations**: Beautiful transitions and micro-interactions powered by `framer-motion` and custom CSS.
- **Fully Responsive**: Mobile-first design implemented tightly with Tailwind CSS to look stunning on any screen.
- **High Performance**: Pre-rendered static pages using Next.js 16 app router for blazing-fast load speeds.
- **Service Catalog**: A dynamic services listing component to easily manage everything from Hotel Bookings to Police Clearances.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS V4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language/i18n:** [React-i18next](https://react.i18next.com/)

## 📂 Project Structure

\`\`\`text
src/
├── app/                  # Next.js App Router mapping
│   ├── components/       # Reusable components (Navbar, Hero, Services, Footer, etc.)
│   ├── globals.css       # Global styles (Tailwind injects)
│   ├── layout.tsx        # Root HTML shell
│   └── page.tsx          # Main Landing Page
├── data/                 # Static data sets (e.g., services list)
├── styles/               # Custom CSS (fonts, theme colors)
└── i18n.ts               # Translation config
\`\`\`

## 🚀 Getting Started

Provide instructions on how to install and run the project locally.

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/siyam-it-center.git
   cd siyam-it-center
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 License

This project is licensed under the MIT License.
