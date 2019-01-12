import React from 'react'
import { Link } from 'gatsby'
import './pages.css'

import Layout from '../components/layout'

const WeekOne = () => (
  <Layout>
    <h1>Week 1</h1>
    <h2>1/7/2019-1/11/2019</h2>
    <p>
      On Monday I spent the day working with my team in a group call filling out
      the technical design document. We all communicated on what frameworks and
      dependencies we should use, what our goals are, and what we should have as
      stretch goals. On Tuesday I worked on starting the website using react. I
      got the basic set up done and made a navigation bar to be able to navigate
      to different pages. Wednesday was a much more difficult day for me. I
      spent the day reading the documentation for Stripe and added a billing
      page to the website. Thursday I realized that my ESLint was not working,
      and the billing page I had created was not following airbnb guidelines, so
      I ended up having to take time to redo alot of the code I wrote the day
      before. I also started research on how to add the billing to our Django
      backend. Tylar and I worked together to research Google Auth0 and we
      started getting that implemented into our front end.
    </p>
    <p>
      This is my first time working on a project with a group, so my experiences
      with forming a team were both very challenging and rewarding. Having to
      communicate as a team, making branches and merging on Github, and figuring
      out what I can help with without having work overlap with other team
      members were all valuable lessons I learned this week. I really haven't
      done much to help the team solidify as a group yet. Even though I
      communicate fine with all the team members individually, I am much more
      quiet in a group setting. I feel like our group gets together very well,
      and even when we have different opinions on how something should be done
      we are able to discuss different options and work together to make a
      compromise.
    </p>
    <div className="links">
      <p>
        1/8
        <a href="https://github.com/Lambda-School-Labs/labs9-stock-trainer/pull/3">
          Pull Request
        </a>
        <a href="https://trello.com/c/Kc9h6HqA/35-sidebar-react-component">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        1/9
        <a href="https://github.com/Lambda-School-Labs/labs9-stock-trainer/pull/7">
          Pull Request
        </a>
        <a href="https://trello.com/c/0lGfc6Tz/26-research-stripe-and-set-up-billing-page">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        1/10
        <a href="https://github.com/Lambda-School-Labs/labs9-stock-trainer/pull/14">
          Pull Request
        </a>
        <a href="https://trello.com/c/0lGfc6Tz/26-research-stripe-and-set-up-billing-page">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        1/11
        <a href="https://github.com/Lambda-School-Labs/labs9-stock-trainer/pull/22">
          Pull Request
        </a>
      </p>
    </div>
    <img
      src={require('../images/labsweek1.png')}
      alt="github contribution chart"
    />
    <p>Github username: chainchompa</p>
    <Link to="/">
      <h4>Go back to the homepage</h4>
    </Link>
  </Layout>
)

export default WeekOne
