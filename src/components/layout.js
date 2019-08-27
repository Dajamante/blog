import React from "react"

import { rhythm } from "../utils/typography"
import Header from "../components/header_components/header"

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
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
