
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071A38] px-6 py-8 text-white lg:px-10">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">

        {/* Identitas kelas */}
        <div className="flex flex-col items-start gap-3">
          <Link
            to="/"
            className="inline-flex rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            <img
              src="/images/logo-ti-unusia-24.png"
              alt="Logo TI-UNUSIA 24"
              className="h-16 w-auto max-w-[220px] object-contain"
            />
          </Link>

          <p className="text-xs leading-relaxed text-slate-400">
            Teknik Informatika
            <br />
            Universitas Nahdlatul Ulama Indonesia
          </p>
        </div>

        {/* Slogan */}
        <div className="md:text-center">
          <p className="text-sm font-semibold text-white">
            Bersama Berkarya,
            <span className="text-blue-400"> Membangun Teknologi.</span>
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Satu kelas, satu tujuan, dan banyak cerita.
          </p>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} TI-UNUSIA 24
          </p>

          <Link
            to="/"
            className="mt-2 inline-block text-xs text-slate-400 transition-colors duration-300 hover:text-blue-400"
          >
            Kembali ke Beranda ↑
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
