import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekThree = () => (
    <Layout>
        <h1>Week 3</h1>
        <h2>2/25/2019-3/1/2019</h2>
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
            This week I created a landing page for a dummy company website. I still need
            to do alot more styling on it, but there is a good bit done and you can successfully
            use the customer service chat from that landing page. 
    </p>
        <img src={require('../images/week3pic1.png')} />
        <img src={require('../images/week3pic2.png')} />
        <img src={require('../images/week3pic3.png')} />
        <h3>Milestone Reflection</h3>
        <p>
        Working together as a team to convert a disparate set of components into a single, cohesive, and 
        complete product has been much more simple than I thought it would be. Before labs I thought trying
        to have a bunch of different people write separate components would turn out messy, with different dependencies 
        clashing and routes not working together. But I feel like our project is doing well and we have made a ton 
        of progress with making a complete product. There has been times where communication wasn't the best and people 
        either worked on the same thing or weren't sure what to work on, but for a group of people who don't have much experience 
        working as a team I think we did pretty good.</p>
        <Link to="/">
            <h4>Go back to the homepage</h4>
        </Link>
    </Layout>
)

export default WeekThree
