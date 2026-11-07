
import { useState } from "react"
import { Link } from "react-router-dom"

// Tipe kategori informasi
type Category = "Semua" | "Akademik" | "Kegiatan" | "Pengumuman"

// Struktur data informasi
type NewsItem = {
  id: number
  category: Exclude<Category, "Semua">
  date: string
  title: string
  description: string
  tag: string
}

function Informasi() {
  // Menyimpan kategori yang sedang dipilih
  const [activeCategory, setActiveCategory] = useState<Category>("Semua")

  // Data dummy informasi kelas
  const news: NewsItem[] = [
    {
      id: 1,
      category: "Pengumuman",
      date: "12 November 2026",
      title: "Pembaruan Informasi Kelas TI-UNUSIA 24",
      description:
        "Temukan berbagai informasi terbaru seputar aktivitas, agenda, dan perkembangan kelas Teknik Informatika angkatan 2024.",
      tag: "Informasi Utama",
    },
    {
      id: 2,
      category: "Akademik",
      date: "08 November 2026",
      title: "Persiapan Kegiatan Akademik Semester",
      description:
        "Informasi mengenai persiapan perkuliahan, agenda akademik, dan berbagai hal yang perlu diperhatikan oleh mahasiswa.",
      tag: "Akademik",
    },
    {
      id: 3,
      category: "Kegiatan",
      date: "05 November 2026",
      title: "Kolaborasi dan Kegiatan Mahasiswa",
      description:
        "Ruang untuk berbagi informasi mengenai kegiatan, kolaborasi, dan aktivitas mahasiswa di lingkungan kelas.",
      tag: "Kegiatan Kelas",
    },
    {
      id: 4,
      category: "Pengumuman",
      date: "02 November 2026",
      title: "Pembaruan Pengumuman Kelas",
      description:
        "Informasi dan pemberitahuan yang perlu diketahui oleh seluruh mahasiswa TI-UNUSIA 24.",
      tag: "Pengumuman",
    },
    {
      id: 5,
      category: "Akademik",
      date: "28 Oktober 2026",
      title: "Informasi Jadwal Perkuliahan",
      description:
        "Perhatikan informasi jadwal perkuliahan untuk membantu mengatur aktivitas akademik.",
      tag: "Akademik",
    },
    {
      id: 6,
      category: "Kegiatan",
      date: "20 Oktober 2026",
      title: "Dokumentasi Aktivitas Angkatan",
      description:
        "Berbagai aktivitas dan cerita kebersamaan mahasiswa Teknik Informatika angkatan 2024.",
      tag: "Kegiatan Kelas",
    },
  ]

  // Daftar kategori filter
  const categories: Category[] = [
    "Semua",
    "Akademik",
    "Kegiatan",
    "Pengumuman",
  ]

  // Menampilkan informasi sesuai kategori
  const filteredNews =
    activeCategory === "Semua"
      ? news
      : news.filter((item) => item.category === activeCategory)

  return (
    <main className="bg-slate-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#071A38] px-6 py-20 text-white lg:px-10 lg:py-24">

        {/* Dekorasi background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
            NEWS & ANNOUNCEMENTS
          </p>

          <h1 className="mt-5 text-4xl leading-tight font-extrabold md:text-6xl">
            Berita & Informasi
            <span className="block text-blue-400">
              TI-UNUSIA 24.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Pusat informasi seputar akademik, pengumuman,
            kegiatan, dan berbagai kabar terbaru dari
            keluarga Teknik Informatika angkatan 2024.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-blue-200">
              Informasi Kelas
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2">
              Akademik
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2">
              Aktivitas Mahasiswa
            </span>
          </div>
        </div>
      </section>

      {/* ================= KONTEN INFORMASI ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* Header informasi */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              LATEST UPDATES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#071A38]">
              Informasi Terbaru
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Ikuti perkembangan dan informasi terbaru dari kelas kami.
            </p>
          </div>

          <p className="text-sm font-medium text-slate-400">
            {filteredNews.length} informasi tersedia
          </p>
        </div>

        {/* Filter kategori */}
        <div className="mt-9 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? "bg-[#0755C9] text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= INFORMASI UTAMA ================= */}

        {/* Menggunakan conditional rendering JSX */}
        {(activeCategory === "Semua" ||
          activeCategory === "Pengumuman") && (
          <article className="group relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2854] to-[#071A38] p-8 text-white shadow-xl shadow-blue-950/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/20 md:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-blue-400/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-200">
                INFORMASI UTAMA
              </span>

              <h3 className="mt-6 text-2xl leading-tight font-extrabold md:text-4xl">
                Satu Portal untuk Berbagai Informasi Kelas.
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
                Website TI-UNUSIA 24 hadir sebagai pusat informasi
                untuk memudahkan mahasiswa mendapatkan berbagai
                pembaruan seputar kegiatan dan kebutuhan akademik.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-medium text-slate-400">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Portal Informasi TI-UNUSIA 24
              </div>
            </div>
          </article>
        )}

        {/* ================= DAFTAR BERITA ================= */}
        <div className="mt-12">

          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#071A38]">
              {activeCategory === "Semua"
                ? "Semua Informasi"
                : `Kategori ${activeCategory}`}
            </h3>

            <span className="text-xs font-medium text-slate-400">
              TERBARU
            </span>
          </div>

          {/* Kumpulan kartu informasi */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
              >

                {/* Visual kartu */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B2854] to-[#071A38]">

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-blue-300/20 transition-transform duration-500 group-hover:scale-125" />

                  <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-blue-300/20" />

                  <span className="relative z-10 text-5xl font-black tracking-widest text-white/90 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300">
                    TI<span className="text-blue-400">24</span>
                  </span>

                  <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-100 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Isi kartu */}
                <div className="flex flex-1 flex-col p-6">

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-blue-600">
                      {item.category}
                    </span>

                    <span className="text-[11px] text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg leading-snug font-bold text-[#071A38] transition-colors duration-300 group-hover:text-blue-600">
                    {item.title}
                  </h4>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 transition-all duration-300 group-hover:gap-3">
                      Informasi kelas
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* Kondisi ketika informasi kosong */}
          {filteredNews.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <h4 className="text-lg font-bold text-[#071A38]">
                Belum Ada Informasi
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Belum ada informasi untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
            STAY CONNECTED
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-[#071A38] md:text-3xl">
            Jangan Lewatkan Informasi Penting.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Kunjungi halaman jadwal untuk melihat informasi
            perkuliahan dan agenda akademik kelas.
          </p>

          <Link
            to="/jadwal"
            className="mt-8 inline-flex rounded-full bg-[#0755C9] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Lihat Jadwal Kelas →
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Informasi
