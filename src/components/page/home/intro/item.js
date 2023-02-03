import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./intro.module.scss"

const Item = ({icon, title, txt}) => (
    <div className={styles.introBlock}>
        <div className={styles.introBlockIcon}>
            <StaticImage
                src="../../../../images/ic-private.png"
                loading="eager"
                alt=""
            />
        </div>
        <p className={styles.introBlockTtl}>{title}</p>
        <p className={styles.introBlockTxt}>
            {txt}
        </p>
    </div>
)

export default Item
