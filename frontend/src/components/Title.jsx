
export default function Title({text, colour}) {
    const classProp = `text-[80px] font-Playfair font-extrabold  text-shadow-[0px_0px_150px_#000] text-${colour}`
  return (
    <div className={classProp}>{text}</div>
  )
}
