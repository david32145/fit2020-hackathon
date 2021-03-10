import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableRipple } from 'react-native-paper'
import { Palette } from '../styles/palette'

function CardItem({
    url,
    onPress,
    title
}: {
    url: number,
    onPress: () => void,
    title: string
}) {
    return (
        <View style={{ paddingHorizontal: 20, width: '100%', marginBottom: 20 }}>
            <TouchableRipple
                style={{
                    height: 140,
                    backgroundColor: Palette.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    elevation: 4
                }}
                onPress={onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 65, height: 65 }} source={url} />
                    <Text
                        style={{
                            fontSize: 18,
                            marginTop: 5,
                            color: Palette.white
                        }}
                    >
                        {title}
                    </Text>
                </View>
            </TouchableRipple>
        </View>
    )
}

export function DashboardScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView style={{ marginTop: 20, marginBottom: 20 }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                <CardItem title="Rendimentos" onPress={() => { }} url={require('../../assets/dashboard-1.png')} />
                <CardItem title="Estoque" onPress={() => { }} url={require('../../assets/dashboard-3.png')} />
                <CardItem title="Pedido" onPress={() => {
                    navigation.navigate("OrderScreen")
                 }} url={require('../../assets/dashboard-2.png')} />
                <CardItem title="Perfil" onPress={() => { }} url={require('../../assets/dashboard-4.png')} />
                <Image style={{ width: 30, height: 30 }} source={require('../../assets/logout.png')} />
            </ScrollView>
            <StatusBar style="light" backgroundColor={Palette.primary} />
        </View>
    )
}