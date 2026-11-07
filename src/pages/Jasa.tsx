
import { Link } from "react-router-dom"

// Struktur data layanan
type Service = {
  id: number
  number: string
  title: string
  category: string
  description: string
  features: string[]
  icon: string
}

// Data layanan yang ditawarkan
const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    category: "PENGEMBANGAN WEBSITE",
    description:
      "Pembuatan website modern dan responsif untuk kebutuhan personal, organisasi, bisnis, maupun instansi.",
    features: [
      "Company Profile",
      "Landing Page",
      "Website Organisasi",
    ],
    icon: "</>",
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Design",
    category: "DESAIN ANTARMUKA",
    description:
      "Perancangan tampilan dan pengalaman pengguna agar aplikasi atau website lebih menarik, nyaman, dan mudah digunakan.",
    features: [
      "Wireframe",
      "Prototype",
      "User Interface Design",
    ],
    icon: "◈",
  },
  {
    id: 3,
    number: "03",
    title: "Graphic Design",
    category: "DESAIN GRAFIS",
    description:
      "Pembuatan kebutuhan visual digital untuk mendukung identitas dan komunikasi sebuah kegiatan atau organisasi.",
    features: [
      "Poster dan Banner",
      "Konten Media Sosial",
      "Identitas Visual",
    ],
    icon: "✳",
  },
  {
    id: 4,
    number: "04",
    title: "Mobile App Development",
    category: "PENGEMBANGAN APLIKASI",
    description:
      "Pengembangan konsep dan aplikasi mobile untuk membantu kebutuhan pengguna melalui perangkat smartphone.",
    features: [
      "Aplikasi Android",
      "Desain Aplikasi",
      "Prototipe Aplikasi",
    ],
    icon: "▣",
  },
  {
    id: 5,
    number: "05",
    title: "Database Management",
    category: "PENGELOLAAN DATABASE",
    description:
      "Perancangan dan pengelolaan basis data untuk membantu penyimpanan serta pengorganisasian informasi.",
    features: [
      "Perancangan Database",
      "SQL dan PostgreSQL",
      "Relasi Antar Tabel",
    ],
    icon: "▤",
  },
  {
    id: 6,
    number: "06",
    title: "IT Consultation",
    category: "KONSULTASI TEKNOLOGI",
    description:
      "Diskusi dan pendampingan awal untuk menentukan solusi teknologi yang sesuai dengan kebutuhan proyek.",
    features: [
      "Konsultasi Proyek",
      "Diskusi Teknologi",
      "Perencanaan Sistem",
    ],
    icon: "⌘",
  },
]

function Jasa() {
  // Membuat pesan konsultasi WhatsApp
  const createWhatsAppLink = (serviceName: string) => {
    const message =
      `Halo TI-UNUSIA 24, saya tertarik dengan layanan ${serviceName}. ` +
      "Boleh saya mendapatkan informasi lebih lanjut?"

    return `https://wa.me/?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="overflow-hidden bg-slate-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#071A38] px-6 py-20 text-white lg:px-10 lg:py-28">

        {/* Dekorasi background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* Teks hero */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
              OUR DIGITAL SERVICES
            </p>

            <h1 className="mt-6 text-4xl leading-tight font-extrabold md:text-6xl">
              Solusi Digital
              <span className="block text-blue-400">
                untuk Kebutuhanmu.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              Kami menghadirkan berbagai layanan di bidang teknologi
              informasi dan kreativitas digital melalui kolaborasi
              mahasiswa Teknik Informatika TI-UNUSIA 24.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#daftar-layanan"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Jelajahi Layanan →
              </a>

              <Link
                to="/tentang"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Panel visual */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#12376B] to-[#091A35] p-8 shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/40">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-300/10" />
              <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-blue-300/10" />

              <div className="relative z-10">

                <p className="text-xs font-bold tracking-[0.3em] text-blue-300">
                  TI-UNUSIA 24
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight text-white">
                  Ideas Into
                  <span className="block text-blue-400">
                    Digital Works.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Mengembangkan ide menjadi solusi digital
                  melalui kreativitas, teknologi, dan kolaborasi.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="text-2xl font-bold text-blue-400">
                      06
                    </span>
                    <p className="mt-1 text-xs text-slate-300">
                      Kategori Layanan
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="text-2xl font-bold text-blue-400">
                      IT
                    </span>
                    <p className="mt-1 text-xs text-slate-300">
                      Digital Solutions
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DAFTAR LAYANAN ================= */}
      <section
        id="daftar-layanan"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
            WHAT WE OFFER
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#071A38] md:text-4xl">
            Layanan yang Kami Tawarkan
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            Pilih layanan sesuai kebutuhanmu. Setiap proyek dapat
            didiskusikan lebih lanjut agar solusi yang dihasilkan
            sesuai dengan tujuan yang ingin dicapai.
          </p>

        </div>

        {/* Kartu layanan */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
            >

              {/* Nomor layanan */}
              <div className="absolute right-6 top-6 text-sm font-bold text-slate-200 transition-colors duration-300 group-hover:text-blue-200">
                {service.number}
              </div>

              {/* Ikon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A38] text-xl font-bold text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
              </div>

              {/* Informasi layanan */}
              <div className="mt-7">

                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-600">
                  {service.category}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-[#071A38] transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

              </div>

              {/* Fitur layanan */}
              <div className="mt-5 border-t border-slate-100 pt-5">

                <p className="text-xs font-bold text-slate-700">
                  Cakupan Layanan
                </p>

                <ul className="mt-4 space-y-3">

                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-xs text-slate-500"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}

                </ul>
              </div>

              {/* Tombol konsultasi */}
              <a
                href={createWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-between rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#071A38] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Konsultasikan

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </article>
          ))}

        </div>
      </section>

      {/* ================= ALUR KERJA ================= */}
      <section className="bg-white px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              HOW WE WORK
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071A38] md:text-4xl">
              Mulai Proyek dalam Tiga Langkah
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Proses dimulai dengan memahami kebutuhan,
              menyusun solusi, kemudian mengembangkan hasil
              sesuai kesepakatan bersama.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* Langkah 1 */}
            <div className="group border-l-2 border-blue-100 pl-7 transition-all duration-300 hover:border-blue-600">

              <span className="text-4xl font-black text-blue-100 transition-colors duration-300 group-hover:text-blue-600">
                01
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#071A38]">
                Konsultasi
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Sampaikan kebutuhan, ide, dan gambaran proyek
                yang ingin kamu kembangkan.
              </p>

            </div>

            {/* Langkah 2 */}
            <div className="group border-l-2 border-blue-100 pl-7 transition-all duration-300 hover:border-blue-600">

              <span className="text-4xl font-black text-blue-100 transition-colors duration-300 group-hover:text-blue-600">
                02
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#071A38]">
                Perencanaan
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Kami mendiskusikan kebutuhan teknis, konsep,
                ruang lingkup, dan estimasi pengerjaan.
              </p>

            </div>

            {/* Langkah 3 */}
            <div className="group border-l-2 border-blue-100 pl-7 transition-all duration-300 hover:border-blue-600">

              <span className="text-4xl font-black text-blue-100 transition-colors duration-300 group-hover:text-blue-600">
                03
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#071A38]">
                Pengembangan
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Proyek dikerjakan berdasarkan kesepakatan
                dan kebutuhan yang telah ditentukan.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#071A38] px-6 py-20 text-center text-white lg:px-10">

        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-blue-400/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-blue-400/10" />

        <div className="relative mx-auto max-w-3xl">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-400">
            LET'S COLLABORATE
          </p>

          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            Punya Ide untuk Dikembangkan?
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
            Mari diskusikan kebutuhan proyekmu dan temukan
            solusi digital yang tepat bersama TI-UNUSIA 24.
          </p>

          <a
            href={createWhatsAppLink("konsultasi proyek")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            Mulai Konsultasi →
          </a>

        </div>
      </section>

    </main>
  )
}

export default Jasa
