import { getLocalImage } from "../../utils"
import { AiFillGithub } from "react-icons/ai"
import { DiReact } from "react-icons/di"
import { SiTailwindcss, SiSwiper } from "react-icons/si"
import styles from "./index.module.scss"

const Index = () => {
  return (
    <div
      className={`${styles.footer} flex flex-col items-center py-4 px-3 text-orange-100`}
    >
      <div className="w-full absolute top-0 left-0 aspect-[25/1] md:aspect-[80/1] translate-y-[-50%]">
        <img
          className="w-full h-full"
          src={getLocalImage("section-border.png")}
        />
      </div>
      <div className="w-14 h-14 md:w-20 md:h-20 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
        <img className="w-full h-full" src={getLocalImage("bottom_icon.png")} />
      </div>
      <div className="w-full max-w-[1000px] text-xs md:text-base text-center flex flex-col items-center">
        <div className="py-5">
          <p className="mb-2 flex flex-col md:flex-row justify-center items-center md:items-end">
            Creation is a part of my life.我是yamaoka,一个业余前端开发爱好者.
            <a
              className="flex items-start underline text-lg mt-1 md:mb-0"
              target="_blank"
              href="https://github.com/yamaoka-eng"
            >
              这是我Github主页
              <AiFillGithub className="text-2xl text-white" />
            </a>
          </p>
          <p>
            这是一个游戏官网也是游戏本体，使用的素材直接从暗黑破坏神以及各个游戏官网扒过来的(毕竟自己不会ui)
          </p>
        </div>
        <div className="grid grid-flow-col gap-2 md:gap-4 place-items-center font-bold">
          技术支持:
          <a
            className="flex items-center text-blue-500"
            href="https://react.docschina.org/"
            target="_blank"
          >
            <DiReact className="w-5 h-5 mr-1" />
            React
          </a>
          <a
            className="flex items-center text-sky-300"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <SiTailwindcss className="w-5 h-5 mr-1" />
            TailWind
          </a>
          <a
            className="flex items-center text-sky-500"
            href="https://swiperjs.com/"
            target="_blank"
          >
            <SiSwiper className="w-5 h-5 mr-1" />
            Swiper
          </a>
        </div>
        <div className="w-full pt-5 border-t-[2px] border-gray-50 border-opacity-10 text-center mt-4">
          Copyright DARKLEGEND.版权所有Yamaoka设计
        </div>
      </div>
    </div>
  )
}

export default Index
