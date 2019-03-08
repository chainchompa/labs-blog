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
        <a href="https://trello.com/c/P5sQ9hKh/119-style-rep-register">
                    Pull Request
        </a>
                <a href="https://trello.com/c/RstX7QCN/38-implement-stripe-basic">
                    Trello Card
        </a>
            </p>
        </div>
        <Link to="/"><h4>Go back to the homepage</h4></Link>
    </Layout>
)

export default WeekFour
