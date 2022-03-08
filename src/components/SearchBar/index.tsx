import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../Form/Input'
import { theme } from '../../pages/utils'

const SearchBar = () => {
    return (
        <Input
            style={styles.search}
            containerStyle={[theme.marginBottom0, theme.flex1]}
            leftIcon="search-outline"
            placeholder='Search for fruits, vegetables, groce...'
        />
    )
}

const styles = StyleSheet.create({
    search: {
        paddingVertical: 0,
        marginRight: 14
    }
})

export default SearchBar