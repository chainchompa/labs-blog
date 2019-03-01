import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekThree = () => (
    <Layout>
        <h1>Week 1</h1>
        <h2>2/18/2019-2/22/2019</h2>
        <img src={require('../images/contributionchartweek3.png')} />
        <p>Github: chainchompa</p>
        <p>
            This week I worked on making a landing page for an example company that we can put our chat client on,
            worked with the team to get socket.io working, and attempted to make our chat client work
            on different domains. The landing page I made still needs to be styled, so I will be working on that Friday
            and possibly working on making our chat look more similar to a customer service chat like Intercom. Besides styling
            we should be completely done with billing since I changed the company ID to no longer by hard coded. Two 
            of the days this week I spent attempting to make our chat client work cross domain, and looked into using 
            zoid or iframes, but was not successful. It looks now like we might have to just make this a library that
            other React apps can install and use. Spending that much time on something that didn't work was kinda discouraging,
            and definitely hurt my contributions as I didn't have many commits and only 2 pull requests.
    </p>
        <div className="links">
            <p>
                Changing company ID to not be hardcoded 
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/96">
                    Pull Request
        </a>
                <a href="https://trello.com/c/klvdZizV/22-team-billing">
                    Trello Card
        </a>
            </p>
        </div>
        <div className="links">
            <p>
                Added a landing page for an example company website
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/109">
                    Pull Request
        </a>
                <a href="https://trello.com/c/RstX7QCN/38-implement-stripe-basic">
                    Trello Card
        </a>
            </p>
        </div>
        <h3>Detailed Analysis</h3>
        <p>
            Most of my time this week was spent on the Billing component and writing
            the backend code for Stripe. I had to write a function to find a company
            by ID and a function to change the has_paid boolean to true for that
            company, so that once we have the Company accounts set up on the front end
            we will be marking the correct company as paid. I also decided to hold off
            on charging monthly for the service and leave that as a stretch goal, so
            companies are now only having to pay a one time fee to use the WebChat
            service. We now have it so that whether you are testing from localhost or
            from the deployed Netlify site, it will still use the correct url to post
            to. So we can use the Billing page from either.
    </p>
        <img src={require('../images/week2pic1.png')} />
        <img src={require('../images/week2pic2.png')} />
        <img src={require('../images/week2pic3.png')} />
        <h3>Milestone Reflection</h3>
        <p>My experiences with the team has been very good so far. I feel like everyone on our team
        is good about communicating what they are working on, responding quickly, consistantly working
        on the project, and always being available for meetings. To help solidify the group I made sure everyone
        understood that communication is going to be one of the most important parts of this project. I've also
        pair programmed with every member of the group at least once to help fix a bug or accomplish something that
        they weren't sure how to do. I have also added friction to the group too though, by not attending every standup
        and not keeping up with the rest of the group with contributions. There have been days where I speak up and
        help guide the team as much as possible, but there are also times that I go an entire meeting without talking.
        I personally haven't done anything to make sure that everyone on the team has a voice, but I think it is important to.
        Especially since our group has 2 people who are the main people speaking, and 2 people who are usually quiet during decision
    making.</p>
        <Link to="/">
            <h4>Go back to the homepage</h4>
        </Link>
    </Layout>
)

export default WeekThree
