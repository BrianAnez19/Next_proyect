import Image from "next/image"
import styles from "./styles.module.css"

export default function Avatar({ alt, src, text }) {
  return (
    <div className={styles.container}>
      <Image className={styles.avatar}  height={49} width={49} alt={alt} src={src} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  )
}