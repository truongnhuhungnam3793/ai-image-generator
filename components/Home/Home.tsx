import Hero from "@/components/Home/Hero/Hero"
import RecentImages from "@/components/Home/RecentImages/RecentImages"
import About from "./About/About"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImages />
      <About />
    </div>
  )
}
export default Home
