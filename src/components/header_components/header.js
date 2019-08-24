import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link>
        <a href="/hello-world/" className={styles[`header__link`]}>
          Details
        </a>
      </nav>
    </div>
  </header>
)

export default Header
