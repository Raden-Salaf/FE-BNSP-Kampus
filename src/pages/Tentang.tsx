
import { Link } from "react-router-dom"

function Tentang() {
  return (
    <main className="overflow-hidden bg-slate-50">

      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#071A38] px-6 py-24 text-white lg:px-10 lg:py-32">
        {/* Dekorasi background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
            WHO WE ARE
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl leading-tight font-extrabold md:text-6xl lg:text-7xl">
            Mengenal Lebih Dekat
            <span className="block text-blue-400">
              TI-UNUSIA 24.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Sebuah ruang untuk belajar, bertumbuh, berkolaborasi,
            dan menciptakan berbagai kemungkinan melalui teknologi.
            Kami adalah keluarga Teknik Informatika angkatan 2024
            Universitas Nahdlatul Ulama Indonesia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/informasi"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Jelajahi Informasi →
            </Link>

            <Link
              to="/galeri"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10"
            >
              Lihat Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* Identitas kelas */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:grid-cols-3 sm:p-9">
          <div className="group border-b border-slate-100 pb-5 transition-all duration-300 hover:-translate-y-1 sm:border-r sm:border-b-0 sm:pb-0">
            <p className="text-xs font-semibold tracking-widest text-slate-400">
              PROGRAM STUDI
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
              Informatika
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Bidang ilmu teknologi informasi
            </p>
          </div>

          <div className="group border-b border-slate-100 pb-5 transition-all duration-300 hover:-translate-y-1 sm:border-r sm:border-b-0 sm:px-8 sm:pb-0">
            <p className="text-xs font-semibold tracking-widest text-slate-400">
              ANGKATAN
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
              2024
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Satu angkatan, satu perjalanan
            </p>
          </div>

          <div className="group transition-all duration-300 hover:-translate-y-1 sm:px-8">
            <p className="text-xs font-semibold tracking-widest text-slate-400">
              UNIVERSITAS
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
              UNUSIA
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Universitas Nahdlatul Ulama Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Cerita kelas */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
            OUR STORY
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-extrabold text-[#071A38] md:text-4xl">
            Bukan Sekadar Belajar Teknologi, Tetapi Juga Bertumbuh Bersama.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            TI-UNUSIA 24 merupakan bagian dari perjalanan mahasiswa
            Teknik Informatika Universitas Nahdlatul Ulama Indonesia
            angkatan 2024. Di dalamnya, setiap mahasiswa memiliki
            kesempatan untuk mengembangkan kemampuan, bertukar
            pengetahuan, dan saling mendukung dalam proses belajar.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Kami percaya bahwa dunia teknologi tidak hanya dibangun
            melalui kemampuan individu, tetapi juga melalui kerja sama,
            kreativitas, dan kemauan untuk terus berkembang.
          </p>
        </div>

        {/* Panel visual tanpa gambar eksternal */}
        <div className="group relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2854] to-[#071A38] p-10 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/20">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-400/20 transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border border-blue-400/20 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10">
            <p className="text-sm font-semibold tracking-[0.4em] text-blue-300">
              TEKNIK INFORMATIKA
            </p>
            <h3 className="mt-5 text-6xl font-black tracking-tight text-white md:text-7xl">
              TI<span className="text-blue-400">24.</span>
            </h3>
            <p className="mt-5 text-sm text-slate-300">
              Together We Learn, Together We Grow.
            </p>
          </div>
        </div>
      </section>

      {/* Visi dan misi */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              OUR DIRECTION
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071A38] md:text-4xl">
              Visi dan Misi Kami
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Menjadi ruang kolaborasi yang mendorong setiap anggota
              untuk berkembang, berkontribusi, dan memberikan dampak
              positif melalui teknologi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Visi */}
            <article className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                V
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071A38]">
                Visi
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Membangun lingkungan kelas yang kolaboratif,
                inovatif, dan adaptif terhadap perkembangan teknologi,
                serta mampu melahirkan generasi yang kompeten dan
                berintegritas.
              </p>
            </article>

            {/* Misi */}
            <article className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                M
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#071A38]">
                Misi
              </h3>

              <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Mendorong budaya belajar dan berbagi pengetahuan.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Mengembangkan kreativitas dan kemampuan di bidang teknologi.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Memperkuat solidaritas dan kerja sama antarmahasiswa.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  Menghasilkan karya yang bermanfaat bagi masyarakat.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section className="bg-[#071A38] px-6 py-16 text-center text-white lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Perjalanan Kami Baru Dimulai.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Setiap proses adalah kesempatan untuk belajar,
            setiap kolaborasi adalah awal dari sebuah karya.
          </p>

          <Link
            to="/galeri"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Lihat Perjalanan Kami →
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Tentang
