
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PublicLayout() {
  return (
    <div className="min-h-screen">

      {/* Navbar yang digunakan bersama oleh halaman publik */}
      <Navbar />

      {/* Konten halaman berubah sesuai URL */}
      <main>
        <Outlet />
      </main>

      {/* Footer yang digunakan bersama oleh halaman publik */}
      <Footer />

    </div>
  )
}

export default PublicLayout
