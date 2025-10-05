import { Button } from "@/components/ui/button"
import Image from "next/image"

const About = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Image */}
        <div className="order-2 xl:order-1">
          <Image
            src="/images/about.jpg"
            alt="About"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* Content */}
        <div className="order-1 xl:order-2">
          <h3 className="text-white mb-4 font-semibold text-lg">What We Do</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Create your Own Ai business easily
          </h2>
          <p className="text-secondary mt-4 text-sm sm:text-base lg:text-lg">
            We are a team of passionate developers who are dedicated to creating
            high-quality software solutions.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="mt-4 w-36 h-12 text-base cursor-pointer uppercase"
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  )
}
export default About
