import React from "react"

import { rhythm } from "../utils/typography"
import Header from "../components/header"
import Footer from "../components/footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`, //first seems to be margin, second padding?
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
