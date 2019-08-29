import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./header.module.css"
import { GoOctoface } from "react-icons/go"
import { GiHealthNormal } from "react-icons/gi"
import { FaTwitter } from "react-icons/fa"
import { FaQuestion } from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <div className={styles[`header__wrap`]}>
        <Link className={styles[`header__wrap__link`]} to={`/`}>
          <GiHealthNormal className={styles[`main_icon`]} />
          <div className={styles[`header__title`]}>
            {` `}
            {data.site.siteMetadata.title}
          </div>
        </Link>
        <nav role="main" className={styles[`header__nav`]}>
          <a
            href="https://github.com/Dajamante/"
            className={styles[`header__link`]}
          >
            <GoOctoface />
          </a>
          {` `}
          <a
            href="https://twitter.com/bestcataccount"
            className={styles[`header__link`]}
          >
            <FaTwitter color="white" />
          </a>
          <a href="/hello-world/" className={styles[`header__link`]}>
            <div className={styles[`hidden_text`]}>About this blog</div>
            <div className={styles[`hidden_question`]}>
              <FaQuestion />
            </div>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
