
import { useState } from "react"

// Tipe kategori galeri
type Category = "Semua" | "Anggota" | "Kegiatan"

// Struktur data foto
type GalleryItem = {
  id: number
  title: string
  category: Exclude<Category, "Semua">
  description: string
  image: string
}

// Data foto sementara
// Nantinya URL gambar bisa diganti dengan dokumentasi asli kelas.
const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Kebersamaan Mahasiswa",
    category: "Anggota",
    description: "Momen kebersamaan mahasiswa TI-UNUSIA 24.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Diskusi dan Kolaborasi",
    category: "Anggota",
    description: "Berbagi ide dan pengetahuan bersama teman.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Aktivitas Perkuliahan",
    category: "Kegiatan",
    description: "Suasana kegiatan belajar di lingkungan kampus.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Belajar Bersama",
    category: "Anggota",
    description: "Membangun semangat belajar dan kebersamaan.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Kegiatan Seminar",
    category: "Kegiatan",
    description: "Mengikuti kegiatan pengembangan wawasan teknologi.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Kerja Sama Tim",
    category: "Anggota",
    description: "Kolaborasi dalam menyelesaikan berbagai proyek.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    title: "Presentasi Proyek",
    category: "Kegiatan",
    description: "Menampilkan hasil karya dan proyek mahasiswa.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "Momen Kebersamaan",
    category: "Anggota",
    description: "Mengabadikan cerita perjalanan satu angkatan.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  },
]

// Daftar kategori filter
const categories: Category[] = ["Semua", "Anggota", "Kegiatan"]

function Galeri() {
  // Menyimpan kategori yang dipilih
  const [activeCategory, setActiveCategory] =
    useState<Category>("Semua")

  // Menyimpan foto yang sedang dibuka
  const [selectedPhoto, setSelectedPhoto] =
    useState<GalleryItem | null>(null)

  // Filter foto berdasarkan kategori
  const filteredGallery =
    activeCategory === "Semua"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory,
        )

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
            OUR MEMORIES
          </p>

          <h1 className="mt-5 text-4xl leading-tight font-extrabold md:text-6xl">
            Galeri Kelas
            <span className="block text-blue-400">
              TI-UNUSIA 24.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Setiap foto menyimpan cerita, setiap kegiatan
            menciptakan kenangan. Lihat berbagai dokumentasi
            perjalanan mahasiswa Teknik Informatika angkatan 2024.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-200">
              Dokumentasi Anggota
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300">
              Dokumentasi Kegiatan
            </span>
          </div>

        </div>
      </section>

      {/* ================= GALERI FOTO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              CLASS DOCUMENTATION
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#071A38]">
              Cerita dalam Bingkai
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Kumpulan dokumentasi dan momen berharga
              dari perjalanan TI-UNUSIA 24.
            </p>
          </div>

          <p className="text-sm font-medium text-slate-400">
            {filteredGallery.length} foto ditampilkan
          </p>

        </div>

        {/* Filter kategori */}
        <div className="mt-9 flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? "bg-[#0755C9] text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category === "Semua"
                ? "Semua Foto"
                : `Galeri ${category}`}
            </button>
          ))}

        </div>

        {/* Grid foto */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredGallery.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedPhoto(item)}
              aria-label={`Lihat foto ${item.title}`}
              className="group relative overflow-hidden rounded-2xl bg-[#071A38] text-left shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >

              {/* Gambar */}
              <div className="relative aspect-[4/5] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gambar */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/95 via-[#071A38]/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Label kategori */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071A38]/60 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-md">
                  {item.category.toUpperCase()}
                </span>

                {/* Ikon lihat */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <span className="text-lg">↗</span>
                </div>

                {/* Informasi foto */}
                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h3 className="text-lg font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>

            </button>
          ))}

        </div>

        {/* Jika tidak ada foto */}
        {filteredGallery.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-[#071A38]">
              Belum Ada Foto
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Dokumentasi untuk kategori ini belum tersedia.
            </p>
          </div>
        )}

      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/90 p-5 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Foto ukuran besar */}
            <div className="min-h-0 bg-[#071A38] md:w-3/5">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="h-full max-h-[55vh] w-full object-contain md:max-h-[80vh]"
              />
            </div>

            {/* Informasi foto */}
            <div className="flex flex-1 flex-col justify-center p-7 md:p-9">

              <span className="text-xs font-bold tracking-widest text-blue-600">
                GALERI {selectedPhoto.category.toUpperCase()}
              </span>

              <h3 className="mt-4 text-2xl font-extrabold text-[#071A38]">
                {selectedPhoto.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {selectedPhoto.description}
              </p>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="mt-8 rounded-xl bg-[#0755C9] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Tutup Foto
              </button>

            </div>

            {/* Tombol close */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Tutup galeri"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#071A38]/80 text-xl text-white transition-all duration-300 hover:rotate-90 hover:bg-blue-600"
            >
              ×
            </button>

          </div>

        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 text-center lg:px-10">

        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
            MORE THAN A CLASS
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-[#071A38] md:text-3xl">
            Setiap Momen Punya Cerita.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Perjalanan kami tidak hanya tentang perkuliahan,
            tetapi juga tentang pengalaman dan kebersamaan.
          </p>

        </div>

      </section>

    </main>
  )
}

export default Galeri
