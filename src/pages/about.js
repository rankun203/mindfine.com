import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="关于 mindfine" />
    <h1>关于 mindfine</h1>
    <p>这里空空如也</p>
    <Link to="/">返回主页</Link>
  </Layout>
)

export default SecondPage
