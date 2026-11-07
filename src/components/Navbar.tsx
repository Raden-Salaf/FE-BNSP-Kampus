
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  // Mengatur kondisi hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Daftar menu navigasi
  const menus = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Informasi", path: "/informasi" },
    { name: "Jadwal", path: "/jadwal" },
    { name: "Galeri", path: "/galeri" },
    { name: "Jasa Kami", path: "/jasa" },
  ]

  // Menutup menu mobile setelah navigasi
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-50 bg-[#071A38] text-white">

      {/* Navbar utama */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">

        {/* Logo resmi */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center transition duration-300 hover:scale-105"
        >
          <img
            src="/images/logo-ti-unusia-24.png"
            alt="Logo TI-UNUSIA 24"
            className="h-16 w-24 object-contain"
          />
        </NavLink>

        {/* Navigasi desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              end={menu.path === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isActive ? "text-blue-400" : "text-white/80"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </nav>

        {/* Tombol login desktop */}
        <NavLink
          to="/login"
          className="hidden rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white md:inline-flex"
        >
          Masuk
        </NavLink>

        {/* Tombol hamburger mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white/20 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Navigasi mobile */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#071A38] transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              end={menu.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-400"
                    : "text-white/80 hover:text-blue-300"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}

          <NavLink
            to="/login"
            onClick={closeMenu}
            className="mb-3 mt-4 rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Masuk ke Akun
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
