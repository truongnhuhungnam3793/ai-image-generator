import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Hero = () => {
  return (
    <div className="w-[95%] min-h-screen mx-auto relative mt-[20vh]">
      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Create Beutiful Image With <br /> Artificial Intelligence
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-center text-secondary mt-3">
          Get started with our AI image generator tools
        </p>
        {/* Prompt input box */}
        <div className="relative w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mt-12 flex items-center justify-center">
          <Input
            placeholder="Generate Your Dream Image"
            className=" h-11 md:h-16 bg-white text-black text-xs sm:text-base placeholder:text-xs sm:placeholder:text-base"
          />
          <Button
            size="lg"
            className="absolute right-2 md:right-6 top-0 bottom-0 my-auto cursor-pointer"
          >
            Generate
          </Button>
        </div>
        {/* Tag */}
        <div className="flex items-center justify-center mt-6 gap-x-4 flex-wrap gap-y-3">
          <p>Popular Tags: </p>
          <Button variant="secondary">Creative</Button>
          <Button variant="secondary">Abstract</Button>
          <Button variant="secondary">Modern</Button>
          <Button variant="secondary">Minimalist</Button>
          <Button variant="secondary">Retro</Button>
        </div>
      </div>
    </div>
  )
}
export default Hero
