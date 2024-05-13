import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className=" bg-red-500 w-full h-20">
        <div className="h-full flex justify-center items-center gap-3">
          <img src="../public/logo_mtj.png" alt="" />
          <p className="text-xl text-white font-bold pb-1">my travel journal.</p>
        </div>
      </nav>
    </>
  )
}
