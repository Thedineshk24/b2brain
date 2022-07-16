import React from 'react'
import '../styles/layout.scss';
import Hero from '../Assests/hero-image.svg';
import Companies from '../Assests/companies.svg';
import reviews from '../Assests/reviews.svg';
import { Content } from 'antd/lib/layout/layout';
import Card from './Card';

const Home = () => {
    return (
        <Content
            style={{
                margin: '0 16px',
            }}
        >
            <Card />
            <div
                className="site__layout__background"
            >
                <img src={Hero} alt="hero-image" />
            </div>
            <div
                className="site__layout__background"
            >
                <img src={Companies} alt="featured companies" />
            </div>
            <div
                className="site__layout__background"
            >
                <img src={reviews} alt="reviews" />
            </div>
        </Content>
    )
}

export default Home;