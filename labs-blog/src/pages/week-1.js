import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekOne = () => (
  <Layout>
    <h1>Week 1</h1>
    <h2>1/7/2019-1/11/2019</h2>
    <p>Going to write about what I did this week here</p>
    <Link to="/"><h4>Go back to the homepage</h4></Link>
  </Layout>
)

export default WeekOne
