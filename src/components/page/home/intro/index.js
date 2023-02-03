import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./intro.module.scss"

const Intro = () => (
    <div className={styles.intro}>
        <div className={styles.introWrap}>
            <div className={styles.introInner}>
                <div className={styles.introCol}>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-private.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Private</p>
                        <p className={styles.introBlockTxt}>
                            We do not collect your data. There are no unsolicited advertisements.
                            We respect your privacy.
                        </p>
                    </div>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-ad.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Ads and Pop-up Blocker</p>
                        <p className={styles.introBlockTxt}>
                            Powerful ad and pop-up blocker. Stress-free and comfortable browsing to your heart's content.
                        </p>
                    </div>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-wallet.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Seamless dApps integration</p>
                        <p className={styles.introBlockTxt}>
                            DIVER Browser is designed to seamlessly interact with Web3 DApps and multiple wallets. It provides a stable, borderless browsing experience with excellent security and an intuitive user experience.
                        </p>
                    </div>
                </div>
                <div className={styles.introImg}>
                </div>
                <div className={styles.introCol}>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-ei-meter.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Unmatched speed</p>
                        <p className={styles.introBlockTxt}>
                            We do not collect your data. There are no unsolicited advertisements.
                            We respect your privacy.
                        </p>
                    </div>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-search.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Next generation search engine</p>
                        <p className={styles.introBlockTxt}>
                            It has a proprietary algorithmic search engine optimized for Web3 exploration and does not bias or censor search results. It also does not track any search history.
                        </p>
                    </div>
                    <div className={styles.introBlock}>
                        <div className={styles.introBlockIcon}>
                            <StaticImage
                                src="../../../../images/ic-cloud-lock.png"
                                loading="eager"
                                alt=""
                            />
                        </div>
                        <p className={styles.introBlockTtl}>Can be synchronized across all devices</p>
                        <p className={styles.introBlockTxt}>
                            Works seamlessly across desktop and mobile devices, synchronizing browsing history, passwords, bookmarks, tabs, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Intro
