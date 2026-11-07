
import { useState } from "react"

// Tipe data hari perkuliahan
type Day =
  | "Senin"
  | "Selasa"
  | "Rabu"
  | "Kamis"
  | "Jumat"

type ScheduleItem = {
  id: number
  day: Day
  startTime: string
  endTime: string
  subject: string
  lecturer: string
  room: string
  type: string
}

// Data jadwal dummy
const schedules: ScheduleItem[] = [
  {
    id: 1,
    day: "Senin",
    startTime: "08:00",
    endTime: "09:40",
    subject: "Algoritma dan Pemrograman",
    lecturer: "Dosen A",
    room: "Ruang 201",
    type: "Teori",
  },
  {
    id: 2,
    day: "Senin",
    startTime: "10:00",
    endTime: "11:40",
    subject: "Basis Data",
    lecturer: "Dosen B",
    room: "Lab Komputer",
    type: "Praktikum",
  },
  {
    id: 3,
    day: "Selasa",
    startTime: "08:00",
    endTime: "09:40",
    subject: "Struktur Data",
    lecturer: "Dosen C",
    room: "Ruang 202",
    type: "Teori",
  },
  {
    id: 4,
    day: "Selasa",
    startTime: "10:00",
    endTime: "11:40",
    subject: "Sistem Operasi",
    lecturer: "Dosen D",
    room: "Ruang 202",
    type: "Teori",
  },
  {
    id: 5,
    day: "Rabu",
    startTime: "09:00",
    endTime: "10:40",
    subject: "Pemrograman Web",
    lecturer: "Dosen E",
    room: "Lab Komputer",
    type: "Praktikum",
  },
  {
    id: 6,
    day: "Rabu",
    startTime: "13:00",
    endTime: "14:40",
    subject: "Matematika Diskrit",
    lecturer: "Dosen F",
    room: "Ruang 203",
    type: "Teori",
  },
  {
    id: 7,
    day: "Kamis",
    startTime: "08:00",
    endTime: "09:40",
    subject: "Jaringan Komputer",
    lecturer: "Dosen G",
    room: "Lab Jaringan",
    type: "Praktikum",
  },
  {
    id: 8,
    day: "Kamis",
    startTime: "10:00",
    endTime: "11:40",
    subject: "Rekayasa Perangkat Lunak",
    lecturer: "Dosen H",
    room: "Ruang 201",
    type: "Teori",
  },
  {
    id: 9,
    day: "Jumat",
    startTime: "08:00",
    endTime: "09:40",
    subject: "Kecerdasan Buatan",
    lecturer: "Dosen I",
    room: "Ruang 204",
    type: "Teori",
  },
]

function Jadwal() {
  // Menyimpan hari yang sedang dipilih
  const [activeDay, setActiveDay] = useState<Day | "Semua">("Semua")

  // Menyimpan status hasil salin pesan
  const [copyMessage, setCopyMessage] = useState("")

  // Daftar hari untuk filter
  const days: (Day | "Semua")[] = [
    "Semua",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
  ]

  // Filter jadwal berdasarkan hari
  const filteredSchedules =
    activeDay === "Semua"
      ? schedules
      : schedules.filter((item) => item.day === activeDay)

  // Menghitung jumlah hari aktif
  const activeDays = new Set(schedules.map((item) => item.day)).size

  // Menghitung jumlah mata kuliah unik
  const totalSubjects = new Set(
    schedules.map((item) => item.subject),
  ).size

  // Membuat format pesan WhatsApp
  const generateWhatsAppMessage = () => {
    const groupedSchedules = days
      .filter((day): day is Day => day !== "Semua")
      .map((day) => {
        const daySchedules = filteredSchedules.filter(
          (item) => item.day === day,
        )

        if (daySchedules.length === 0) return ""

        const scheduleText = daySchedules
          .map(
            (item) =>
              `• ${item.startTime} - ${item.endTime}\n  ${item.subject}\n  Dosen: ${item.lecturer}\n  Ruang: ${item.room}`,
          )
          .join("\n\n")

        return `*${day.toUpperCase()}*\n${scheduleText}`
      })
      .filter(Boolean)
      .join("\n\n")

    const heading =
      activeDay === "Semua"
        ? "JADWAL KULIAH TI-UNUSIA 24"
        : `JADWAL KULIAH TI-UNUSIA 24 - ${activeDay.toUpperCase()}`

    return `*${heading}*\n\n${groupedSchedules}\n\n_Semangat menjalani perkuliahan!_`
  }

  // Menyalin pesan ke clipboard
  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateWhatsAppMessage())
      setCopyMessage("Pesan berhasil disalin!")
    } catch {
      setCopyMessage(
        "Gagal menyalin pesan. Pastikan browser mengizinkan akses clipboard.",
      )
    }
  }

  // Membuka WhatsApp dengan pesan yang sudah dibuat
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    generateWhatsAppMessage(),
  )}`

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
            ACADEMIC SCHEDULE
          </p>

          <h1 className="mt-5 text-4xl leading-tight font-extrabold md:text-6xl">
            Jadwal
            <span className="block text-blue-400">
              Perkuliahan.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Akses informasi jadwal perkuliahan TI-UNUSIA 24.
            Atur aktivitas akademikmu dan pastikan tidak
            melewatkan setiap sesi perkuliahan.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-200">
              Tahun Akademik 2026
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Teknik Informatika
            </span>
          </div>
        </div>
      </section>

      {/* ================= RINGKASAN JADWAL ================= */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-3">

          {/* Total mata kuliah */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
            <p className="text-xs font-bold tracking-widest text-slate-400">
              TOTAL MATA KULIAH
            </p>

            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-4xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
                {totalSubjects}
              </h2>

              <span className="text-2xl text-blue-500">▤</span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Mata kuliah terjadwal
            </p>
          </div>

          {/* Hari aktif */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
            <p className="text-xs font-bold tracking-widest text-slate-400">
              HARI PERKULIAHAN
            </p>

            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-4xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
                {activeDays}
              </h2>

              <span className="text-2xl text-blue-500">▦</span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Hari aktif setiap minggu
            </p>
          </div>

          {/* Total pertemuan */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
            <p className="text-xs font-bold tracking-widest text-slate-400">
              TOTAL PERTEMUAN
            </p>

            <div className="mt-4 flex items-end justify-between">
              <h2 className="text-4xl font-extrabold text-[#071A38] transition-colors group-hover:text-blue-600">
                {schedules.length}
              </h2>

              <span className="text-2xl text-blue-500">◷</span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Sesi perkuliahan per minggu
            </p>
          </div>

        </div>
      </section>

      {/* ================= DAFTAR JADWAL ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              WEEKLY TIMETABLE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#071A38]">
              Jadwal Mingguan
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Pilih hari untuk melihat jadwal perkuliahan tertentu.
            </p>
          </div>

          <p className="text-sm font-medium text-slate-400">
            {filteredSchedules.length} sesi ditemukan
          </p>
        </div>

        {/* Filter hari */}
        <div className="mt-9 flex flex-wrap gap-3">
          {days.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                activeDay === day
                  ? "bg-[#0755C9] text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Tabel jadwal */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-[#071A38] text-xs font-bold tracking-wider text-white">
                  <th className="px-6 py-5">HARI</th>
                  <th className="px-6 py-5">WAKTU</th>
                  <th className="px-6 py-5">MATA KULIAH</th>
                  <th className="px-6 py-5">DOSEN</th>
                  <th className="px-6 py-5">RUANGAN</th>
                  <th className="px-6 py-5">JENIS</th>
                </tr>
              </thead>

              <tbody>
                {filteredSchedules.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-100 transition-colors duration-200 last:border-0 hover:bg-blue-50/70"
                  >
                    <td className="px-6 py-5">
                      <span className="font-bold text-[#071A38]">
                        {item.day}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-6 py-5 text-sm font-medium text-slate-600">
                      {item.startTime} - {item.endTime}
                    </td>

                    <td className="px-6 py-5">
                      <p className="font-semibold text-[#071A38]">
                        {item.subject}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {item.lecturer}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {item.room}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          item.type === "Praktikum"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Kondisi ketika tidak ada jadwal */}
                {filteredSchedules.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center"
                    >
                      <p className="font-bold text-[#071A38]">
                        Tidak Ada Jadwal
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        Belum ada perkuliahan pada hari ini.
                      </p>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
            <p className="text-xs leading-6 text-slate-500">
              * Jadwal di atas merupakan data simulasi untuk
              tampilan awal website.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP GENERATOR ================= */}
      <section className="border-t border-slate-200 bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

          {/* Informasi generator */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-blue-600">
              SHARE YOUR SCHEDULE
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#071A38] md:text-4xl">
              Bagikan Jadwal dengan Mudah.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-500">
              Tidak perlu menyusun pesan jadwal secara manual.
              Gunakan generator untuk membuat format pesan
              yang siap dibagikan melalui WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {/* Tombol salin pesan */}
              <button
                type="button"
                onClick={handleCopyMessage}
                className="rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-600/10"
              >
                Salin Pesan
              </button>

              {/* Tombol buka WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0755C9] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Buka WhatsApp →
              </a>

            </div>

            {/* Pesan status salin */}
            {copyMessage && (
              <p
                role="status"
                className="mt-4 text-sm font-medium text-blue-600"
              >
                {copyMessage}
              </p>
            )}
          </div>

          {/* Preview pesan */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:shadow-xl">

            <div className="flex items-center gap-3 border-b border-slate-200 bg-[#071A38] px-6 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                TI
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  TI-UNUSIA 24
                </p>

                <p className="text-xs text-slate-400">
                  Preview pesan jadwal
                </p>
              </div>
            </div>

            <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap break-words p-6 text-xs leading-7 text-slate-600">
              {generateWhatsAppMessage()}
            </pre>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Jadwal
