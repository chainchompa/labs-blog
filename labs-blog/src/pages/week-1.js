import React from 'react'
import { Link } from 'gatsby'
import './pages.css'

import Layout from '../components/layout'

const WeekOne = () => (
  <Layout>
    <h1>Week 1</h1>
    <h2>2/11/2019-2/15/2019</h2>
    <p>
      On Monday and Tuesday I worked with my team to fill out the technical
      design document. We all communicated on what frameworks and dependencies
      we should use, what our goals are, and what we should have as stretch
      goals. We did research on our competitors, and I signed up for a free
      trial of Intercom to help us figure out how to implement the Customer
      Service widget. On Wednesday I worked with the group to get started on the
      server and on my own I started building the website using React. I got the
      basic set up done and made a settings navigation bar to be able to
      navigate to different settings page. I also put together my gatsby blog to
      show my progress on Lambda Labs. Thursday I started reading the
      documentation for Stripe and added a billing page, landing page, and
      account settings page to the website. Then I started research on how to
      add the billing to our backend through Stripe. I also deployed the website
      to Netlify and set it up to continuously deploy from the master branch in
      our Github repo.
    </p>
    <p>
      I am new to working on a project with a group, and it's been a learning
      experience. Having to communicate as a team, making branches and merging
      on Github, and figuring out what I can help with without having work
      overlap with other team members were all valuable lessons I learned this
      week. I feel like our group gets together very well, and even when we have
      different opinions on how something should be done we are able to discuss
      different options and work together to make a compromise.
    </p>
    <div className="links">
      <p>
        2/13
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/6">
          Pull Request
        </a>
        <a href="https://trello.com/c/Kc9h6HqA/35-sidebar-react-component">
          Trello Card
        </a>
      </p>
    </div>
    <div className="links">
      <p>
        2/14
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/16">
          Pull Request
        </a>
        <a href="https://trello.com/c/ah9ULf0Q/28-file-structure-for-front-end">
          Trello Card
        </a>
      </p>
    </div>
    <img src={require('../images/week1pic1.png')} />
    <img src={require('../images/week1pic2.png')} />
    <img src={require('../images/week1pic3.png')} />
    <h3>Detailed Analysis</h3>
    <p>Most of my time this week was spent creating React components for the website and getting
    the website deployed to Netlify. I created the settings navigation using a Material-UI tab component,
    the billing page using Stripe React Elements, and the account settings page using Material-UI inputs. The netlify deployment 
    was the most difficult part, and that is because I was trying to deploy from the company_dashboard folder inside of the repository when I
    should have put my netlify configure files inside of the root directory and deployed from there.</p>
    <Link to="/">
      <h4>Go back to the homepage</h4>
    </Link>
  </Layout>
)

export default WeekOne;
