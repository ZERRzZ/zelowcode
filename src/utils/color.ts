export const randomColor = (num: number, type: string) => {
  const color = []

  for (let i = 0; i < num; i++) {
    const h = (360 / 10) * Math.floor(Math.random() * 10)
    color.push({ h, s: 0.4, l: 0.6 })
  }

  if (type === 'hsl') {
    const hsl = color.map(c => `hsl(${c.h} ${c.s * 100}% ${c.l * 100}%)`)
    return num === 1 ? hsl[0] : hsl
  } else if (type === 'rgb') {
    const temp = color.map(c => HSLToRGB(c.h, c.s, c.l))
    const rgb = temp.map(t => `rgb(${t[0]}, ${t[1]}, ${t[2]})`)
    return num === 1 ? rgb[0] : rgb
  }
}

export const HSLToRGB = (h: number, s: number, l: number) => {
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [255 * f(0), 255 * f(8), 255 * f(4)]
}
