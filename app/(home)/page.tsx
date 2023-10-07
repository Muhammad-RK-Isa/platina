import { Carousel } from "./_components/carousel"
import { CategorySwiper } from "./_components/category-swiper"


const HomePage = () => {
  return (
    <>
      <Carousel />
      <CategorySwiper/>
      <div className="p-4 md:p-6">
        Hello from Platina
      </div>
    </>
  )
}

export default HomePage