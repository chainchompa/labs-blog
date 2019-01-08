import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/week-1/"><h2>Week 1</h2></Link>
    <Link to="/week-2/"><h2>Week 2</h2></Link>
    <Link to="/week-3/"><h2>Week 3</h2></Link>
    <Link to="/week-4/"><h2>Week 4</h2></Link>
    <Link to="/week-5/"><h2>Week 5</h2></Link>
  </Layout>
)

export default IndexPage
