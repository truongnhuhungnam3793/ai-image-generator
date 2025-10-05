"use client"

import { Navlinks } from "@/constant"
import { Menu, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
  openNav: () => void
}

const Navbar = ({ openNav }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`flex items-center justify-between h-[12vh] fixed z-50 w-full mx-auto transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-md" : ""
      }`}
    >
      {/* LOGO */}
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-16">IMIGAI</h1>
      {/* NavLinks */}
      <div className="md:flex items-center space-x-10 hidden">
        {Navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      {/* Button and Icons */}
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer size-6" />
        <Search className="cursor-pointer size-6" />
        <Menu className="cursor-pointer size-6 md:hidden" onClick={openNav} />
      </div>
    </div>
  )
}
export default Navbar
