import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./articles.module.scss"



const Articles = () => (
    <div className={styles.article}>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Ad Blocker
            </div>
            <div className={styles.articleItemTxt}>
                Powerful ad blocker blocks invasive ads.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-ad.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Cookie Blocker
            </div>
            <div className={styles.articleItemTxt}>
                Block cookie dialogs and banners to disable tracking
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-cookie.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Encrypted anonymous browsing
            </div>
            <div className={styles.articleItemTxt}>
                Comfortable browsing through anonymous networks with<br /> enhanced privacy and security.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-encrypted.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Wallet Linkage
            </div>
            <div className={styles.articleItemTxt}>
                Wallet functionality (DIVER Wallet) is implemented as standard. Play, collect, trade, and view all your favorite decentralized applications in one place without installing extensions.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-wallet.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Translation
            </div>
            <div className={styles.articleItemTxt}>
                Browsing pages can be comfortably translated into more than 100 languages.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-translation.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                DIVER Search Engine (tentative)
            </div>
            <div className={styles.articleItemTxt}>
                Equipped with a proprietary algorithm search engine optimized for Web3 search.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-diver.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Search by tab
            </div>
            <div className={styles.articleItemTxt}>
                Tab function to organize and manage multiple pages and support multitasking
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-search.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Advanced Customization
            </div>
            <div className={styles.articleItemTxt}>
                Highly detailed and flexible customization functions support work efficiency improvement.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-advanced.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
        <div className={styles.articleItem}>
            <div className={styles.articleItemTtl}>
                Synchronization between devices
            </div>
            <div className={styles.articleItemTxt}>
                Compatible with all devices. Seamless access to tabs, history, and bookmarks. <br />
                All you need is a Wallet account.
            </div>
            <div className={styles.articleItemImg}>
                <StaticImage
                    src="../../../../images/img-sync.png"
                    loading="eager"
                    alt=""
                />
            </div>
        </div>
    </div>
)

export default Articles
