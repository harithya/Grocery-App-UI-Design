import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { PageProps } from '../types'

const SplashScreen: FC<PageProps> = (props) => {
    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen