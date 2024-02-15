import React from 'react'
import Carousel from '../card/Carousel'
import Card from '../card/Card'
import Layout from '../Layout'
import NewsLetter from '../card/NewsLetter'

const Home = () => {
    return (
        <Layout>
            <Carousel/>
            <div className='my-2'>
            <Card/>
            </div>
            <NewsLetter/>
        </Layout>
    )
}

export default Home
