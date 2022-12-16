import { useRef, useEffect, useState } from "react"
import { Navigation, EffectCoverflow } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { getLocalImage } from "../../utils"
import styles from "./index.module.scss"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "./index.scss"

const Welcome = () => {
  const videoEl = useRef()

  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    let v = videoEl.current
    const show = () => setTimeout(() => setShowVideo(true), 500)
    v.addEventListener("canplaythrough", show) // 监听视频是否加载完成
    return () => v.removeEventListener("canplaythrough", show)
  }, [])

  return (
    <div className="w-full relative max-h-[1100px] h-screen aspect-[1/1] md:aspect-video bg-black">
      <div className={styles.bgVido}>
        <video
          autoPlay
          muted
          loop
          controls={false}
          className={`${styles.bgVidoContentVideo} ${
            showVideo ? "z-[1] block" : "z-0 hidden"
          }`}
          ref={videoEl}
        >
          <source src={getLocalImage("DLVideo1.mp4")} type="video/mp4" />
          <div></div>
        </video>
        <div
          className={`${styles.bgVidoContentImage} ${
            !showVideo ? "z-[1]" : "z-0"
          }`}
        ></div>
      </div>
      <div className="absolute top-[60%] left-[50%] translate-x-[-50%] w-[20rem] h-[5rem] md:w-[40rem] md:h-[10rem] flex flex-col place-items-center text-center">
        <p className="py-8 font-bold text-2xl md:text-5xl text-orange-300 coolFont textShadow">
          <span className="text-red-700">D</span>ARK{" "}
          <span className="text-red-700">L</span>EGEND
        </p>
        <div className="cursor-pointer w-[10rem] md:w-[13rem] relative text-xs">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={getLocalImage("btn.png")}
          />
          <div className="relative py-3 md:py-4 text-center text-[#b2856c] text-base md:text-lg">
            Start Game
          </div>
        </div>
      </div>
    </div>
  )
}

const Title = ({ title }) => {
  return (
    <div className="mb-20 md:mb-32 py-4 px-20 md:py-6 md:px-28 relative text-center text-sm md:text-xl pixelFont">
      <img
        className="w-full h-full absolute top-0 left-0"
        src={getLocalImage("title_bg.png")}
      />
      {title}
    </div>
  )
}

const HowToPlay = () => {
  const illustrate = [
    {
      imageUrl: "e-sword.png",
      h2: "Adventure Mode",
      h3: "Higher levels of Hero comes with higher profits",
    },
    {
      imageUrl: "e-equipment.png",
      h2: "Heroes/Props are NFTs",
      h3: "Free to Trade",
    },
    {
      imageUrl: "e-powerBook.png",
      h2: "Gift/Skill System",
      h3: "Reinforce for Hero abilities",
    },
    {
      imageUrl: "e-goldBucket.png",
      h2: "Dual-token economic system",
      h3: "Both token can be mined",
    },
  ]

  const Item = ({ imageUrl, h2, h3 }) => {
    return (
      <div className="flex flex-col items-center justify-start">
        <img
          className="w-[7rem] md:w-[15.5rem] aspect-{1.05/1}"
          src={getLocalImage(imageUrl)}
        />
        <h2 className="my-4 text-base md:text-xl font-semibold">{h2}</h2>
        <h3 className="text-xs md:text-sm">{h3}</h3>
      </div>
    )
  }

  return (
    <div
      className={`${styles.howToPlay} flex flex-col place-items-center w-full py-32 relative`}
    >
      <div className="absolute top-0 w-full aspect-[13/1] md:aspect-[40/1] translate-y-[-50%]">
        <img className="w-full h-full" src={getLocalImage("topFrame.png")} />
      </div>
      <div className="absolute bottom-0 w-full aspect-[20/1] md:aspect-[80/1]">
        <img className="w-full h-full" src={getLocalImage("bottomFrame.png")} />
      </div>
      <Title title="How to Play" />
      <div className="grid gap-x-1 gap-y-16 grid-cols-2 md:grid-cols-4 justify-center px-3 py-6 text-xs text-[#e6d3c3] text-center font-mono">
        {illustrate.map((item, index) => (
          <Item
            imageUrl={item.imageUrl}
            h2={item.h2}
            h3={item.h3}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

const Hero = () => {

  const roles = [
    { imageUrl: "role-01.png" },
    { imageUrl: "role-02.png" },
    { imageUrl: "role-03.png" },
    { imageUrl: "role-04.png" },
    { imageUrl: "role-05.png" },
    { imageUrl: "role-06.png" },
    { imageUrl: "role-07.png" },
  ]

  return (
    <div
      className={`${styles.heroBg} w-full aspect-[1/2] md:aspect-[1/0.5] flex flex-col relative overflow-hidden`}
    >
      <div
        className={`${styles.heroTitleBg} pixelFont px-20 py-8 text-xl md:text-2xl absolute left-[50%] translate-x-[-50%] top-14 md:top-5 xl:top-14 text-black font-semibold`}
      >
        HERO
      </div>
      <div>
        <div className="bottom-10 absolute h-full w-full">
          <Swiper
            // install Swiper modules
            modules={[Navigation, EffectCoverflow]}
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: `.${styles.lastNext}`,
              nextEl: `.${styles.next}`,
            }}
            loop={true}
            className='w-full h-full'
          >
            {roles.map(({ imageUrl }, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className='select-none'
                >
                  {({ isActive  }) => (
                    <img
                    className={`w-full h-full transition-all duration-500 select-none ${isActive ? 'opacity-100 scale-110' : 'opacity-50'}`}
                    src={getLocalImage(imageUrl)}
                    />
                  )}
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className={styles.lastNext}></div>
        <div className={styles.next}></div>
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <Welcome />
      <HowToPlay />
      <Hero />
    </div>
  )
}

export default Index
