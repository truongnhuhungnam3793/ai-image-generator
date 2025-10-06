import Link from "next/link"

const Footer = () => {
  return (
    <div className="py-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0">
        <div className="col-span-2">
          <h3 className="text-white text-xl sm:text-3xl md:text-4xl font-bold w-[80%]">
            We develop & create digital future
          </h3>
        </div>
        <div>
          <h3 className="text-white text-xl sm:text-3xl md:text-4xl font-bold">
            Email
          </h3>
          <Link
            href="mailto:truongnhuhungnam@gmail.com"
            className="text-secondary text-sm"
          >
            truongnhuhungnam@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Footer
