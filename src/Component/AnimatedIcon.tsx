import anime from "animejs"
import { useEffect } from "react"

export interface IAnimatedIconProps {
  trigger: "hover" | "click" | "manual" // 触发条件。如果为manual，则按照active判断时候触发
  active?: boolean, // 当trigger为manual时生效
  activeSVGIconPath: string
  deActiveSVGIconPath: string
  size?: string
}

/**
 * 动画图标
 * @param param
 * @returns 
 */
export function AnimatedIcon({ trigger = "manual", active = false, activeSVGIconPath, deActiveSVGIconPath, size = "20" }: IAnimatedIconProps) {
  useEffect(() => {
    if (trigger === "manual") {
      if (active === true) {
        triggerToActive("manual")
      } else {
        triggerToDeActive("manual")
      }
    }
  }, [active, trigger])

  const triggerToActive = (triggerKey: "hover" | "click" | "manual") => {
    if (trigger === triggerKey) {
      anime({
        targets: ".animated-icon-container",
        points: activeSVGIconPath,
        baseFrequency: 0,
        scale: 1,
        loop: false,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      })
    }
  }

  const triggerToDeActive = (triggerKey: "hover" | "click" | "manual") => {
    if (trigger === triggerKey) {
      anime({
        targets: ".animated-icon-container",
        points: deActiveSVGIconPath,
        baseFrequency: 0,
        scale: 1,
        loop: false,
        direction: 'alternate',
        easing: 'easeInOutExpo'
      })
    }
  }


  return (
    <svg
      className="animated-icon-container"
      points={deActiveSVGIconPath}
      width={size}
      height={size}
      stroke="black"
      onMouseEnter={() => triggerToActive("hover")}
      onMouseLeave={() => triggerToDeActive("hover")}
      onMouseDown={() => triggerToActive("click")}
      onMouseUp={() => triggerToDeActive("click")}
    ></svg>
  )
}