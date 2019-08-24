import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import { GoOctoface } from "react-icons/go"
import { GiHealthNormal } from "react-icons/gi"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        <GiHealthNormal className={styles[`main_icon`]} />
      </Link>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link>
        <a
          href="https://github.com/Dajamante/"
          className={styles[`header__link`]}
        >
          <GoOctoface />
        </a>
        <a href="/hello-world/" className={styles[`header__link`]}>
          About this blog
        </a>
      </nav>
    </div>
  </header>
)

export default Header
