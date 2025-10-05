type SectionHeadingProps = {
  heading: string
  subHeading: string
}

const SectionHeading = ({ heading, subHeading }: SectionHeadingProps) => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-white">{heading}</h2>
      <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary mt-3">
        {subHeading}
      </p>
    </div>
  )
}
export default SectionHeading
