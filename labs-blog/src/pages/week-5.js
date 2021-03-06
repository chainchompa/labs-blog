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
          This week I mostly focused on styling, especially the Account Settings, Admin Panel, and Billing pages. I also adjusted
          our Navigation set up to all be on one left hand bar instead of having a separate navigation just for settings. I feel like
          our website looks completely different from how it looked at the beginning of the week, and you can now use it on mobile and have
          it look good.
      </p>
      <img src={require('../images/week5pic1.png')} />
      <img src={require('../images/week5pic2.png')} />
      <img src={require('../images/week5pic3.png')} />
      <h3>Milestone Reflection</h3>
      <p>
          Because our team is taking an extra week in Lambda Labs to spend more time on our project, we have not brought an application to
          completion. We are currently working on those final tasks that were mentioned in the question, including fixing bugs from socket.io,
          making our website more responsive, and cleaning up the styling. There is still some functionality to be added too, such as implementing
          subscription plans through Stripe, creating a demo page for people to try out the application, and adding extra pages to our website.
      </p>
      <Link to="/"><h4>Go back to the homepage</h4></Link>
  </Layout>
)

export default WeekFive
