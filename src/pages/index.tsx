import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import type { HeadFC, PageProps } from "gatsby"
import './index.css'

import App from "./App"

const IndexPage = ({}: PageProps) => {
  return (
    <main>
      <BrowserRouter>
 		    <Routes>
			    <Route path="/" element={<App />} />
		    </Routes>
 	    </BrowserRouter>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Sparrow Portfolio</title>
