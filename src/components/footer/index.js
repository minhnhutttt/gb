import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerInner}>
            <div className={styles.footerLogo}>
                <Link to="/">
                    <StaticImage
                        src="../../images/logo-footer.png"
                        loading="eager"
                        alt=""
                    />
                </Link>
            </div>
            <div className={styles.footerFlex}>
                <div className={styles.footerItem}>
                    <p className={styles.footerItemTtl}>
                        About
                    </p>
                    <p className={styles.footerItemTxt}>
                        We are a global privacy technology company built on the principle of putting online privacy and security first.
                    </p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.footerItemTtl}>
                        Address
                    </p>
                    <p className={styles.footerItemTxt}>
                        sample:341 Blueberry Dr, Monona, WI 53713
                    </p>
                </div>
            </div>
        </div>    
        <div className={styles.footerContact}>
            <Link to="/">
                <StaticImage
                    src="../../images/ic-contact.png"
                    loading="eager"
                    alt=""
                />
                <span>Contact</span>
            </Link>
        </div>
        <div className={styles.footerCopy}>
            Copyright © 2023 Greedy Brain All rights reserved.
        </div>
      </div>
  </footer>
)

export default Footer
