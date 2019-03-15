import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekFive = () => (
  <Layout>
      <h1>Week 5</h1>
      <h2>3/11/2019-3/15/2019</h2>
      <img src={require('../images/contributionchartweek5.png')} />
      <p>Github: chainchompa</p>
      <p>
          This week I focused on styling the website and chat application, making our website more responsive to
          different screen sizes, and fixing bugs.
      </p>
      <div className="links">
          <p>
              Styling Image Upload in Account Settings
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/190">
                  Pull Request
      </a>
              <a href="https://trello.com/c/RfX8Bh9y/20-account-settings">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Replaced Settings Navigation with a single Navigation Bar
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/198">
                  Pull Request
      </a>
              <a href="https://trello.com/c/RknFQF9P/123-make-navigation-links">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Changed styling in Account Settings and Admin Panel
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/200">
                  Pull Request
      </a>
              <a href="https://trello.com/c/RfX8Bh9y/20-account-settings">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Styled iframe, Styled Update Password Page, and fixed bug with Update Password
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/211">
                  Pull Request
      </a>
              <a href="https://trello.com/c/WsnVRL20/154-style-update-password">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Created a new logo and tested on different pages
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/216">
                  Pull Request
      </a>
              <a href="https://trello.com/c/tikXPay6/155-create-company-logo">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Styled Navigation and Chat Dashboard container, made responsive
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/220">
                  Pull Request
      </a>
              <a href="https://trello.com/c/ovT7A5X2/143-style-rep-chat-dashboard">
                  Trello Card
      </a>
          </p>
      </div>
      <div className="links">
          <p>
              Styled Billing Page, made responsive
      <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/226">
                  Pull Request
      </a>
              <a href="https://trello.com/c/fGt8NGXd/112-billing-checkoutform-styling">
                  Trello Card
      </a>
          </p>
      </div>
      <h3>Detailed Analysis</h3>
      <p>
          This week I mostly focused on styling, especially the login and register pages. I used material UI to style and
          went to other websites for inspiration on how they should look.
      </p>
      <img src={require('../images/week5pic1.png')} />
      <img src={require('../images/week5pic2.png')} />
      <img src={require('../images/week5pic3.png')} />
      <Link to="/"><h4>Go back to the homepage</h4></Link>
      <h3>Milestone Reflection</h3>
      <p>
          This week our team was supposed to work together to make our product look and feel as good as it works under the hood.
          Unfortunately, because our assignment was a bit more technically difficult than others, we ended up spending most of this week
          and last week focusing on functionality instead of styling. Because of that, we still have a long ways to go to make our website and
          chat client look professional. I think our team is going to take an extra week in Labs to perfect chattr to make up for starting so late on it.
      </p>
      <Link to="/"><h4>Go back to the homepage</h5></Link>
  </Layout>
)

export default WeekFive
