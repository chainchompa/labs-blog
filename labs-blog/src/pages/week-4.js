import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const WeekFour = () => (
    <Layout>
        <h1>Week 4</h1>
        <h2>3/4/2019-3/8/2019</h2>
        <img src={require('../images/contributionchartweek4.png')} />
        <p>Github: chainchompa</p>
        <p>
            This week I worked on styling different pages and creating a way to navigate to those pages. I styled the login and
            registration pages for representatives and companies, a navigation bar to navigate to different parts of our company
            website, helped Linda some with styling the landing page, and created a logo for chattr. I also worked on getting our account
            settings page functional and able to change a representatives profile information.
        </p>
        <div className="links">
            <p>
                Added Navigation
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/158">
                    Pull Request
        </a>
                <a href="https://trello.com/c/S6NqLPdS/5-navigation">
                    Trello Card
        </a>
            </p>
        </div>
        <div className="links">
            <p>
                Styling Login Page
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/154">
                    Pull Request
        </a>
                <a href="https://trello.com/c/BKvBpuVF/118-style-rep-login">
                    Trello Card
        </a>
            </p>
        </div>
        <div className="links">
            <p>
                Styling Register Page
        <a href="https://github.com/Lambda-School-Labs/labs10-webchat/pull/143">
                    Pull Request
        </a>
                <a href="https://trello.com/c/RstX7QCN/38-implement-stripe-basic">
                    Trello Card
        </a>
            </p>
        </div>
        <h3>Detailed Analysis</h3>
        <p>
            This week I mostly focused on styling, especially the login and register pages. I used material UI to style and
            went to other websites for inspiration on how they should look.
        </p>
        <img src={require('../images/week4pic1.png')} />
        <img src={require('../images/week4pic2.png')} />
        <img src={require('../images/week4pic3.png')} />
        <h3>Milestone Reflection</h3>
        <p>
            This week our team was supposed to work together to make our product look and feel as good as it works under the hood.
            Unfortunately, because our assignment was a bit more technically difficult than others, we ended up spending most of this week
            and last week focusing on functionality instead of styling. Because of that, we still have a long ways to go to make our website and
            chat client look professional. I think our team is going to take an extra week in Labs to perfect chattr to make up for starting so late on it.
        </p>
        <Link to="/"><h4>Go back to the homepage</h4></Link>
    </Layout>
)

export default WeekFour
