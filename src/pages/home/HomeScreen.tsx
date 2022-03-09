import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HomeLayout, Slider, BannerItem, CategoryItem, Section, SpesialDealItem, ProductItem } from '../../components'
import { Divider, Text } from '@ui-kitten/components'

const HomeScreen = () => {
    return (
        <HomeLayout>
            <Slider>
                <BannerItem index={0} />
                <BannerItem index={1} />
                <BannerItem index={2} />
            </Slider>
            <Section title="Categories">
                <Slider>
                    <CategoryItem title='Vegetables' image={require("../../assets/img/categories/1.png")} index={0} />
                    <CategoryItem title='Fruits' image={require("../../assets/img/categories/2.png")} index={1} />
                    <CategoryItem title='Meats' image={require("../../assets/img/categories/3.png")} index={2} />
                    <CategoryItem title='Eggs' image={require("../../assets/img/categories/4.png")} index={3} />
                    <CategoryItem title='Drinks' image={require("../../assets/img/categories/5.png")} index={4} />
                    <CategoryItem title='Bakery' image={require("../../assets/img/categories/6.png")} index={5} />
                </Slider>
            </Section>
            <Divider style={styles.divider} />
            <Section title="Special Deal" withMore>
                <Slider>
                    <SpesialDealItem index={0} image={require("../../assets/img/special/1.png")} />
                    <SpesialDealItem index={1} image={require("../../assets/img/special/2.png")} />
                    <SpesialDealItem index={2} image={require("../../assets/img/special/3.png")} />
                </Slider>
            </Section>
            <Section title="Recomendation" withMore>
                <Slider>
                    <ProductItem index={0} />
                    <ProductItem index={1} />
                    <ProductItem index={2} />
                    <ProductItem index={3} />
                    <ProductItem index={4} />
                </Slider>
            </Section>
        </HomeLayout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    divider: {
        marginTop: 40,
    }
})