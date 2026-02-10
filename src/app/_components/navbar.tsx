"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada del navbar
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Cambiar background en scroll
      ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(5, 46, 22, 0.95)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(5, 46, 22, 0)",
            backdropFilter: "blur(0px)",
            duration: 0.3,
          });
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 transition-all"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-2xl font-bold text-white transition-colors hover:text-emerald-300"
          >
            Bosques de Agua
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("impacto")}
              className="text-white transition-colors hover:text-emerald-300"
            >
              Nuestro Impacto
            </button>
            <button
              onClick={() => scrollToSection("mision")}
              className="text-white transition-colors hover:text-emerald-300"
            >
              ¿Por qué?
            </button>
            <button
              onClick={() => scrollToSection("trabajo")}
              className="text-white transition-colors hover:text-emerald-300"
            >
              Nuestro Trabajo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="rounded-full bg-emerald-600 px-6 py-2 text-white transition-all hover:scale-105 hover:bg-emerald-700"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 rounded-lg bg-emerald-950/95 p-6 backdrop-blur-lg md:hidden">
            <button
              onClick={() => scrollToSection("impacto")}
              className="text-left text-white transition-colors hover:text-emerald-300"
            >
              Nuestro Impacto
            </button>
            <button
              onClick={() => scrollToSection("mision")}
              className="text-left text-white transition-colors hover:text-emerald-300"
            >
              ¿Por qué?
            </button>
            <button
              onClick={() => scrollToSection("trabajo")}
              className="text-left text-white transition-colors hover:text-emerald-300"
            >
              Nuestro Trabajo
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-white transition-all hover:bg-emerald-700"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
