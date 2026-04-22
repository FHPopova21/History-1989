import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Начало" },
    { path: "/daily-life", label: "Ежедневие" },
    { path: "/memories", label: "Спомени" },
    { path: "/gallery", label: "Галерия" },
    { path: "/pros-cons", label: "Плюсове и минуси" },
    { path: "/1989-changes", label: "Промените от 1989" },
    { path: "/my-opinion", label: "Моето мнение" },
  ];

  return (
    <div className="min-h-screen bg-[#2a2520] text-[#e8e6e3]">
      {/* Navigation */}
      <nav className="border-b border-[#4a443d] bg-[#1f1b17]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm tracking-[0.15em] opacity-60 font-medium z-20">
              ИСТОРИЧЕСКИ АРХИВ
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-wrap justify-end gap-6 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors ${
                      isActive ? "text-[#d4af37]" : "text-[#b8b5b0] hover:text-[#e8e6e3]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden z-20 relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#b8b5b0] hover:text-[#e8e6e3] focus:outline-none transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 pb-4 pt-2 border-t border-[#4a443d]">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base tracking-wide transition-colors ${
                      isActive ? "text-[#d4af37]" : "text-[#b8b5b0] hover:text-[#e8e6e3]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#4a443d] bg-[#1f1b17] py-6 sm:py-8 mt-12 sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-sm tracking-wide opacity-60">
            Животът в България преди 1989 • Проект за исторически архив
          </p>
          <p className="text-xs mt-2 opacity-40">Създаден за час по история в 7-ми клас • 2026 г.</p>
        </div>
      </footer>
    </div>
  );
}
