
import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"

function Login() {
  // Mengatur apakah password ditampilkan atau disembunyikan
  const [showPassword, setShowPassword] = useState(false)

  // Menyimpan pesan setelah form dikirim
  const [message, setMessage] = useState("")

  // Menangani pengiriman form login
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Login belum terhubung ke backend
    setMessage("Fitur login belum terhubung ke sistem autentikasi.")
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071A38] px-5 py-12">

      {/* Dekorasi background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Konten utama */}
      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-shadow duration-500 hover:shadow-blue-950/40 md:grid-cols-2">

        {/* Panel informasi */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0B2854] to-[#071A38] p-12 text-white md:flex">

          {/* Dekorasi panel */}
          <div className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full border border-blue-400/10" />
          <div className="pointer-events-none absolute -right-10 top-1/2 h-44 w-44 rounded-full border border-blue-400/10" />

          <div className="relative z-10">

            {/* Logo resmi */}
            <img
              src="/images/logo-ti-unusia-24.png"
              alt="Logo TI-UNUSIA 24"
              className="w-full max-w-[260px] object-contain object-left transition-transform duration-300 hover:scale-105"
            />

            <p className="mt-10 text-xs font-semibold tracking-[0.3em] text-blue-300">
              CLASS INFORMATION PORTAL
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight">
              Welcome
              <span className="block text-blue-400">
                Back.
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Selamat datang kembali di portal informasi
              mahasiswa Teknik Informatika UNUSIA 2024.
              Masuk untuk mengakses informasi dan aktivitas kelas.
            </p>
          </div>

          <div className="relative z-10 border-t border-white/20 pt-6">
            <p className="text-sm font-semibold tracking-wide">
              TI-UNUSIA 24
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Bersama Berkarya, Membangun Teknologi.
            </p>
          </div>
        </section>

        {/* Panel form login */}
        <section className="flex flex-col justify-center px-7 py-12 sm:px-12 md:px-10 lg:px-14">


          {/* Logo untuk tampilan mobile */}
          <div className="mb-9 md:hidden">
            <div className="inline-flex max-w-full items-center justify-center overflow-hidden rounded-2xl bg-[#071A38] p-3 shadow-lg shadow-blue-950/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20">
              <img
                src="/images/logo-ti-unusia-24.png"
                alt="Logo TI-UNUSIA 24"
                className="w-full max-w-[220px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>


          {/* Heading */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              MEMBER AREA
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#071A38]">
              Masuk ke Akun
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Silakan masukkan akun kamu untuk melanjutkan
              ke portal kelas.
            </p>
          </div>

          {/* Form login */}
          <form onSubmit={handleSubmit} className="mt-9 space-y-6">

            {/* Email atau username */}
            <div>
              <label
                htmlFor="identity"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email atau Username
              </label>

              <input
                id="identity"
                name="identity"
                type="text"
                placeholder="Masukkan email atau username"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-24 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800"
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>
            </div>

            {/* Ingat akun */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-blue-600"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                Ingat saya
              </label>
            </div>

            {/* Tombol masuk */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#0755C9] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0 active:scale-[0.99]"
            >
              Masuk ke Portal
            </button>

            {/* Pesan informasi */}
            {message && (
              <p
                role="status"
                className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-700"
              >
                {message}
              </p>
            )}
          </form>

          {/* Kembali ke homepage */}
          <div className="mt-9 border-t border-slate-100 pt-6 text-center">
            <Link
              to="/"
              className="inline-block text-sm font-semibold text-slate-500 transition-all duration-200 hover:-translate-x-1 hover:text-blue-600"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

        </section>
      </div>
    </main>
  )
}

export default Login
