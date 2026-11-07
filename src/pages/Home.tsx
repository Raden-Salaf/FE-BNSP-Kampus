
import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="h-full">
      {/* Hero utama homepage dengan background video */}
      <section className="relative flex h-full min-h-0 items-center overflow-hidden bg-[#071A38] text-white">

        {/* Background video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/hero-campus.mp4"
            type="video/mp4"
          />
          Browser kamu tidak mendukung video.
        </video>

        {/* Overlay navy */}
        <div className="hero-overlay" />

        {/* Konten utama */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              CLASS INFORMATION PORTAL
            </div>

            <h1 className="text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
              TI-UNUSIA 24

              <span className="mt-2 block text-blue-400">
                Teknik Informatika
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 md:text-xl">
              Bersama berkarya, membangun teknologi,
              dan menciptakan masa depan yang lebih baik.
              Satu kelas, satu tujuan, dan banyak cerita.
            </p>

            {/* Tombol navigasi */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/tentang"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Kenali Kelas Kami →
              </Link>

              <Link
                to="/informasi"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:bg-white hover:text-[#071A38]"
              >
                Lihat Informasi
              </Link>

            </div>

            {/* Identitas singkat kelas */}
            <div className="mt-16 flex flex-wrap gap-10 border-t border-white/20 pt-7">

              <div>
                <h3 className="text-2xl font-bold">TI</h3>
                <p className="mt-1 text-xs text-slate-300">
                  Teknik Informatika
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">2024</h3>
                <p className="mt-1 text-xs text-slate-300">
                  Angkatan
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">UNUSIA</h3>
                <p className="mt-1 text-xs text-slate-300">
                  Universitas Nahdlatul Ulama Indonesia
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Indikator scroll tidak diperlukan karena homepage hanya hero */}
      </section>
    </main>
  )
}

export default Home
