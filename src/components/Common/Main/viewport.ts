interface Viewport {
  readonly width: number
  readonly height: number
  readonly bottom: number
  scale: number
  horizontal: boolean
}

let viewportData: Viewport

export const setViewport = (size: { width?: number; height?: number; bottom?: number }) => {
  if (viewportData) return viewportData

  if (size.width === undefined) size.width = 3200

  viewportData = reactive<Viewport>({
    width: size.width,
    height: size.height ?? (size.width / 16) * 9,
    bottom: size.bottom ?? 0,
    scale: 1,
    horizontal: false
  })

  let isInputFocus = false
  const setSize = () => {
    document.documentElement.style.setProperty('--window-w', `${window.innerWidth}px`)
    document.documentElement.style.setProperty('--window-h', `${window.innerHeight}px`)

    viewportData.horizontal = window.innerWidth <= 550 && window.innerWidth < window.innerHeight
    viewportData.scale = Math.min(
      window.innerWidth / viewportData.width,
      window.innerHeight / (viewportData.height + viewportData.bottom)
    )
  }

  setSize()

  document.addEventListener('focus', () => (isInputFocus = true), true)

  document.addEventListener('blur', () => (isInputFocus = false), true)

  window.onresize = () => {
    if (!isInputFocus) {
      setSize()
    }
  }

  const match = window.matchMedia('(orientation:portrait)')
  match.addEventListener('change', () => {
    setSize()
  })

  return viewportData
}

export const useViewport = () => viewportData
