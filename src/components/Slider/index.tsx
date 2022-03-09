import { ScrollView, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { constant } from '../../pages/utils'

interface Props {

}
const Slider: FC<Props> = (props) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.slider}>
            {props.children}
        </ScrollView>
    )
}

export default Slider

const styles = StyleSheet.create({
    slider: {
        paddingHorizontal: constant.container,
    },
})