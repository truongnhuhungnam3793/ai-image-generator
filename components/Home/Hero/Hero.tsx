"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const Hero = () => {
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  const handleGenerate = async () => {
    setLoading(true)

    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      headers: {
        "x-rapidapi-key": "07832b5b0emsh066defc65cc8e29p1ed381jsn56d3531d6ab5",
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        prompt: prompt,
        style_id: 4,
        size: "1-1",
      },
    }

    try {
      const response = await axios.request(options)
      setImage(response?.data?.result?.data?.results[0]?.origin)

      toast.success("Image generated successfully")
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response?.data.message)
      } else {
        toast.error("Failed to generate image")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.target = "_blank"
    link.href = image
    link.download = "generated-image.jpg"
    link.click()
  }

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
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            size="lg"
            className="absolute right-2 md:right-6 top-0 bottom-0 my-auto cursor-pointer"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
            {loading && <Loader2 className="size-4 animate-spin" />}
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
        {/* Show Loading and Image */}
        {loading && (
          <div className="mt-6">
            <Loader2 className="size-10 animate-spin" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center justify-center">
            <img
              src={image}
              alt="Generated Image"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button className="my-4 cursor-pointer" onClick={handleDownload}>
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Hero
