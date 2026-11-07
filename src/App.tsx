
import { Routes, Route } from "react-router-dom"

import PublicLayout from "./layouts/PublicLayout"

import Home from "./pages/Home"
import Tentang from "./pages/Tentang"
import Informasi from "./pages/Informasi"
import Jadwal from "./pages/Jadwal"
import Galeri from "./pages/Galeri"
import Jasa from "./pages/Jasa"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>

      {/* Halaman publik menggunakan layout bersama */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/jasa" element={<Jasa />} />
      </Route>

      {/* Login memiliki halaman tersendiri */}
      <Route path="/login" element={<Login />} />

      {/* Halaman jika URL tidak ditemukan */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold text-slate-800">
              404 - Halaman Tidak Ditemukan
            </h1>
          </div>
        }
      />

    </Routes>
  )
}

export default App
