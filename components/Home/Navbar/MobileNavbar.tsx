import { Navlinks } from "@/constant"
import { X } from "lucide-react"
import Link from "next/link"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-200%]"

  return (
    <div>
      {/* NavLinks */}
      <div
        className={`text-white fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[100] top-0 ${navOpen}`}
      >
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white  w-fit text-xl ml-12 border-b-[1.5px] border-white pb-1 sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <X
          className="absolute top-6 right-6 size-6 sm:size-8 cursor-pointer"
          onClick={closeNav}
        />
      </div>
    </div>
  )
}
export default MobileNavbar
