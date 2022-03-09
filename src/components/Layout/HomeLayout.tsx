import React, { FC, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet } from 'react-native'
import { color } from '../../pages/utils'
import Container from '../Container'
import Background from '../Container/Background'
import Address from '../Header/Address'
import HomeHeader from '../Header/HomeHeader'

const HomeLayout: FC = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleHeaderActive = (e: NativeSyntheticEvent<NativeScrollEvent>) =>
        (e.nativeEvent.contentOffset.y > 92) ? setIsActive(true) : setIsActive(false)

    return (
        <>
            <Container
                style={styles.container}
                statusBarColor={isActive ? color.white : color.background}
                disableBackground backgroundStyle={styles.background}>
                <HomeHeader isActive={isActive} />
                <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} onScroll={handleHeaderActive}>
                    <Address />
                    <Background style={styles.background} />
                    {props.children}
                </ScrollView>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: undefined,
        position: "relative"
    },
    background: {
        top: -210
    },
    scroll: {
        paddingBottom: 100
    }
})

export default HomeLayout