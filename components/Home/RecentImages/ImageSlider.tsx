"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"

const ImageSlider = () => {
  return (
    <div className="w-[67%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto mt-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {["r1.jpg", "r2.jpg", "r3.jpg", "r4.jpg", "r5.jpg", "r6.jpg"].map(
            (item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 pl-2 md:pl-4">
                <div className="h-[300px] md:h-[400px] relative">
                  <Image
                    src={`/images/${item}`}
                    alt="Image"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default ImageSlider
