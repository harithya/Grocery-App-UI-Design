import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { PageProps } from '../types'
import { Container, Logo } from '../../components'
import { color, theme } from '../utils'

const SplashScreen: FC<PageProps> = (props) => {
    return (
        <Container style={styles.container}>
            <View style={[theme.toCenter, theme.flex1]}>
                <Logo height={50} style={styles.logo} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.primary
    },
    logo: {
        marginTop: 200
    }
})

export default SplashScreen