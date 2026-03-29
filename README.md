# Siyam IT Center

A modern, responsive, and bilingual (English/Bangla) service website for Siyam IT Center in Narayanganj, Bangladesh.

It is built with Next.js App Router and React, and showcases local digital/government services such as visa help, passport support, NID services, trade license, e-TIN, printing, and air ticket booking.

## Live Website

- Live: https://siyamitcenter.vercel.app
- Repository: https://github.com/RifatHossaiN47/siyam-it-center.git

## Highlights

- Bilingual UI with language toggle (English and Bangla)
- Smooth section-based landing page experience
- Animated hero, counters, and feature/service cards
- WhatsApp-first lead capture form with prefilled message
- Mobile-first responsive design
- Static optimized output using Next.js build

## Sections Included

- Navbar with scroll navigation and language switch
- Hero section with CTA buttons
- Stats section with animated counters
- Services grid (20+ services)
- Why Choose Us section
- About section
- Contact section with WhatsApp integration
- Footer with quick links, contact info, and social links
- Scroll-to-top button

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- i18next + react-i18next
- motion (Framer Motion package)
- Lucide React + React Icons
- Sonner (toast notifications)

## Project Structure

src/
|- app/
|  |- components/
|  |- globals.css
|  |- layout.tsx
|  |- page.tsx
|- data/
|  |- services.ts
|- styles/
|  |- fonts.css
|  |- theme.css
|- i18n.ts

## Local Development

Prerequisite: Node.js 20+ and npm.

1. Clone repository

   git clone https://github.com/RifatHossaiN47/siyam-it-center.git
   cd siyam-it-center

2. Install dependencies

   npm install

3. Start development server

   npm run dev

4. Open in browser

   http://localhost:3000

## Production Build

Create and run production build:

npm run build
npm run start

## Available Scripts

- npm run dev: Run development server
- npm run build: Build for production
- npm run start: Start production server
- npm run lint: Run ESLint checks

## Service Data and Translations

- Service cards are managed in src/data/services.ts
- All translation keys and content are in src/i18n.ts

## Deployment

The project is deployed on Vercel:

- https://siyamitcenter.vercel.app

To redeploy, push to the main branch connected with Vercel.

## Maintainer

- Owner: Sabbir Ahmed
- Built by: Md Rifat Hossen (rifat8851@gmail.com)
