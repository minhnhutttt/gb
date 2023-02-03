import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./download.module.scss"
import { Link } from "gatsby"

const Download = () => (
    <div className={styles.download}>
        <p className={styles.downloadTtl}>Fast,Safe and Secure Browsing Experience</p>
        <p className={styles.downloadTxt}>Take back your privacy now!</p>
        <div className={styles.downloadBtn}>
            <Link to="/">
                <StaticImage
                    src="../../../../images/ic-dl.png"
                    loading="eager"
                    alt=""
                />
                <p>Download Now <span>( mac os64bit )</span></p>
            </Link>
        </div>
    </div>
)

export default Download
