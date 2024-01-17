import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './index.css'

import App from "./App"


const IndexPage = ({}: PageProps) => {
  return (
    <main>
      <App />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Sparrow Portfolio</title>