import { useRef, useEffect, useState } from "react"
import { getLocalImage } from "../../utils"

const Index = () => {
  const divRef = useRef()

  useEffect(() => {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize"
    const transverse = () => {
      console.log(evt)
      var width = document.documentElement.clientWidth
      var height = document.documentElement.clientHeight
      var element = divRef.current.style
      console.log(divRef)
      console.log(width)
      if (width > height) {
        element.width = `${width}px`
        element.height = `${height}px`
        element.top = 0
        element.left = 0
        element.transform = "none"
        element.transformOrigin = "50% 50%"
      } else {
        element.width = `${height}px`
        element.height = `${width}px`
        element.top = `${(height - width) / 2}px`
        element.left = `${(0 - height - width) / 2}px`
        element.transform = "rotate(90deg)"
        element.transformOrigin = "50% 50%"
      }
    }
    transverse()
    window.addEventListener(evt, transverse, false)

    return () => window.removeEventListener(evt, transverse)
  }, [])

  return (
    <div ref={divRef} className="w-full h-full text-4xl text-white">
      测试
    </div>
  )
}

export default Index
