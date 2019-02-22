import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekTwo = () => (
  <Layout>
    <h1>Week 1</h1>
    <h2>2/18/2019-2/22/2019</h2>
    <img src={require('../images/contributionchartweek2.png')} />
    <p>Github: chainchompa</p>
    <p>This week I finally finished the Billing page, and got the back end
    of the project working with Stripe. Now we can successfully take payments both locally and while deployed on Netlify. 
    I also worked more on the User Settings Page, and am currently still working to integrate it with Firebase and our database. I 
    also added a way to add a profile picture for the representative in User Settings, and still need to store the uploaded picture into our 
    Cloudlify server. Even though my contributions were less this week, I still feel like I accomplished a lot because I also was pair programming
    and helping other people with issues throughout the week. Such as helping Wonjae deploy the chat app to Netlify, helping Linda with the Admin Panel,
    and working with the team to help make sure we are branching correctly and fixing merge conflicts.</p>
    <div className="links">
      <p>
        Working on writing the backend code for Stripe
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/37">
          Pull Request
        </a>
        <a href="https://trello.com/c/RstX7QCN/38-implement-stripe-basic">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        Finishing implementing Stripe, pair programmed with Cameron
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/40">
          Pull Request
        </a>
        <a href="https://trello.com/c/RstX7QCN/38-implement-stripe-basic">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        Fixed a bug where Company information would not show on the Admin Panel
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/75">
          Pull Request
        </a>
        <a href="https://trello.com/c/0xN98Qsk/21-admin-panel">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        Added profile picture upload, styled Landing Page
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/66">
          Pull Request
        </a>
        <a href="https://trello.com/c/1iHIAS4W/15-landing-page">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        Changing Billing environment variable based off of whether in production or development
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/77">
          Pull Request
        </a>
        <a href="https://trello.com/c/jUFxq1YH/60-change-url-for-posting-a-stripe-charge-to-be-conditional-on-env">
          Trello Card
        </a>
      </p>
    </div>
    <Link to="/">
      <h4>Go back to the homepage</h4>
    </Link>
  </Layout>
)

export default WeekTwo
