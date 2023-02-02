import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header.module.scss"

const Header = () => (
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
      <div className={styles.headerNav}>
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

export default Header
