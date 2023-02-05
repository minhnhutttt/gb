import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <Link
          to="/"
        >
          <StaticImage
            src="../../images/logo.png"
            loading="eager"
            alt=""
          />
        </Link>
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`${styles.hamburgerLines} ${isOpen ? styles.active : '' }`}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
        <div className={`${styles.headerNav} ${isOpen ? styles.active : '' }`}>
          <ul>
            <li><Link to="/">Service</Link></li>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/">Terms of Service</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
