// src/app/page.tsx
"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </I18nextProvider>
  );
}
