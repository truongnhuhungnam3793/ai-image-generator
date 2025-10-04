"use client"

import Navbar from "@/components/Home/Navbar/Navbar"
import MobileNavbar from "@/components/Home/Navbar/MobileNavbar"
import { useState } from "react"

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false)
  const openNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Navbar openNav={openNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}
export default ResponsiveNavbar
