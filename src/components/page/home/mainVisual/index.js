import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./mainVisual.module.scss"

const MainVisual = () => (
    <div className={styles.mv}>
        <div className={styles.mvWrap}>
            <h2 className={styles.mvTxt}>Redefining Browsing</h2>
            <div className={styles.mvMain}>
                <div className={styles.mvMainImg}>
                    <StaticImage
                        src="../../../../images/img-device.png"
                        loading="eager"
                        alt=""
                    />
                </div>
                <div className={styles.mvMainTxt}>
                    DIVER Browser (tentative)
                    User-First Distributed WEB3 Browser that Restores True Freedom and Privacy
                </div>
            </div>
            <div className={styles.mvBtn}>
                <Link to="/">
                    <StaticImage
                        src="../../../../images/btn-gb.png"
                        loading="eager"
                        alt=""
                    />
                </Link>
                <Link to="/">
                    <StaticImage
                        src="../../../../images/btn-app.png"
                        loading="eager"
                        alt=""
                    />
                </Link>
                <Link to="/">
                    <StaticImage
                        src="../../../../images/btn-google.png"
                        loading="eager"
                        alt=""
                    />
                </Link>
            </div>
        </div>
    </div>
)

export default MainVisual
