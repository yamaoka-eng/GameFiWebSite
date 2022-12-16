import { useContext, useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineDown, AiOutlineUnorderedList } from "react-icons/ai"
import { getLocalImage } from "../../utils"
import { AppContext } from "../../context/AppContext"
import { Message } from "../../components"
import styles from "./index.module.scss"

const Index = () => {
  const langMuneRef1 = useRef()
  const langMuneRef2 = useRef()
  const itemMuneRef = useRef()

  const { HeaderInfo, setLanguage, MessageInfo } = useContext(AppContext)
  const [lang, setLang] = useState("English")
  const [langMuneShow1, setLangMuneShow1] = useState(false)
  const [langMuneShow2, setLangMuneShow2] = useState(false)
  const [itemMuneShow, setItemMuneShow] = useState(false)
  const [pathName, setPathName] = useState("/")

  const location = useLocation()

  const langClass = "px-3 py-2 hover:bg-gray-200 transition-all duration-300"

  useEffect(() => setPathName(location.pathname), [location])

  useEffect(() => {
    const showLangMune1 = (e) => {
      if (langMuneRef1.current.contains(e.target)) return
      setLangMuneShow1(false)
    }

    const showLangMune2 = (e) => {
      if (langMuneRef2.current.contains(e.target)) return
      setLangMuneShow2(false)
    }

    document.body.addEventListener("click", showLangMune1)
    document.body.addEventListener("click", showLangMune2)

    return () => {
      document.body.removeEventListener("click", showLangMune1)
      document.body.removeEventListener("click", showLangMune2)
    }
  }, [])

  // 选择语言
  const chosseLang = (data) => {
    setLang(data)
    setLanguage(data)
  }

  // 连接钱包
  const connectWallet = () => Message.onInfo(MessageInfo.unopen)

  return (
    <header className="w-full bg-black drop-shadow-md text-white fixed top-0 left-0 z-[99] pixelFont">
      <div className="w-full h-10 md:h-auto md:aspect-{11/1} absolute bottom-[0] left-0 translate-y-[100%]">
        <img className="w-full h-full" src={getLocalImage("topBar.png")} />
      </div>
      <div className={styles.header}>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img className="w-full h-full" src={getLocalImage("favicon.ico")} />
          </div>
          <span className="ml-2 text-xs md:text-sm font-semibold coolFont">
            <span className="text-red-600">D</span>ark
            <span className="text-red-600">L</span>egend
          </span>
        </div>

        <ul className="hidden md:flex">
          {HeaderInfo.ulItem.map((item) => (
            <Link
              className={`${
                item.href === pathName && "text-orange-300 " + styles.liImage
              } bg-center py-4 md:px-2 lg:px-4 transition-all duration-500 cursor-pointer`}
              key={item.name}
              to={item.href}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center">
          <div
            className="relative items-center cursor-pointer p-3 select-none text-xs hidden md:flex"
            ref={langMuneRef1}
            onClick={() => setLangMuneShow1(!langMuneShow1)}
          >
            <div className="mr-2">{lang}</div>
            <AiOutlineDown
              className={`${langMuneShow1 && "rotate-180"} transition-all`}
            />
            <ul
              className={`absolute top-10 bg-white shadow-md transition-all duration-[200] border-t border-gray-100 text-gray-400 ${
                !langMuneShow1 && styles.UlHidden
              }`}
            >
              <li className={langClass} onClick={() => chosseLang("English")}>
                English
              </li>
              <li className={langClass} onClick={() => chosseLang("中文")}>
                中文
              </li>
            </ul>
          </div>
          <div
            className="bg-gradient-to-r from-pink-600 to-orange-300 btn md:py-3 py-1 md:px-6 ml-3 text-xs "
            onClick={connectWallet}
          >
            {HeaderInfo.btn}
          </div>
          <div onClick={() => setItemMuneShow(true)} className="ml-3">
            <AiOutlineUnorderedList className="text-gray-100 md:hidden w-7 h-7" />
          </div>
          <div
            className={`w-screen h-screen fixed top-0 left-0 opacity-20 bg-black ${
              itemMuneShow ? "" : "hidden"
            }`}
            onClick={() => setItemMuneShow(false)}
          ></div>
          <ul
            ref={itemMuneRef}
            className={`fixed h-screen w-[50vw] top-0 right-0 bg-black shadow-md transition-all duration-300 flex flex-col justify-between ${
              itemMuneShow ? "translate-x-[0]" : "translate-x-[100%]"
            }`}
          >
            <div>
              <div className="flex px-3 py-3 justify-end">
                <img
                  onClick={() => setItemMuneShow(false)}
                  src={getLocalImage("close.png")}
                />
              </div>
              {HeaderInfo.ulItem.map((item) => (
                <Link
                  className={`${
                    item.href === pathName &&
                    "text-orange-300 " + styles.liImage
                  } my-5 flex justify-center bg-center py-4 lg:px-4 last:px-0 transition-all duration-500 cursor-pointer`}
                  key={item.name}
                  to={item.href}
                  onClick={() => setItemMuneShow(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div
              className="relative flex items-center justify-center cursor-pointer p-3 select-none text-xs"
              ref={langMuneRef2}
              onClick={() => setLangMuneShow2(!langMuneShow2)}
            >
              <div className="mr-2">{lang}</div>
              <AiOutlineDown
                className={`${langMuneShow2 && "rotate-180"} transition-all`}
              />
              <ul
                className={`absolute top-[-4.2rem] bg-white shadow-md transition-all duration-[200] border-t border-gray-100 text-gray-400 ${
                  !langMuneShow2 && styles.UlHidden
                }`}
              >
                <li className={langClass} onClick={() => chosseLang("English")}>
                  English
                </li>
                <li className={langClass} onClick={() => chosseLang("中文")}>
                  中文
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Index
