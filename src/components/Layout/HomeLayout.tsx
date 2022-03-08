import React, { FC } from 'react'
import Container from '../Container'
import HomeHeader from '../Header/HomeHeader'

const HomeLayout: FC = (props) => {
    return (
        <Container>
            <HomeHeader />
            {props.children}
        </Container>
    )
}

export default HomeLayout