import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import Input from '../Form/Input'
import { theme } from '../../pages/utils'

interface Props {
    style?: StyleProp<ViewStyle>
}
const SearchBar: FC<Props> = (props) => {
    return (
        <Input
            style={[styles.search, props.style]}
            containerStyle={[theme.marginBottom0, theme.flex1]}
            leftIcon="search-outline"
            placeholder='Search for fruits, vegetables, groce...'
        />
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical: 0,
        marginRight: 14,
        height: 42,
        alignItems: "center"
    }
})

export default SearchBar