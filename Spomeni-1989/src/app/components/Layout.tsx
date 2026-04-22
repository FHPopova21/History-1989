import { Outlet, NavLink } from "react-router";

export function Layout() {
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
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
            <div className="text-sm tracking-[0.15em] opacity-60 text-center sm:text-left w-full sm:w-auto">ИСТОРИЧЕСКИ АРХИВ</div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 md:gap-6 w-full sm:w-auto">
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
