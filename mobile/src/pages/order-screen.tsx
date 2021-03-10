import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Palette } from '../styles/palette'
import { MaterialIcons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold',
        color: Palette.primaryLight,
        fontSize: 20
    },
    box: {
        flex: 1,
        height: 150,
        padding: 10,
        backgroundColor: 'rgba(35, 155, 2, 0.17)',
    }
})

function ItemOrder() {
    return (
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 20,
                borderRadius: 10,
                overflow: 'hidden',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: '#1D7001',
            }}>
                <View style={styles.box}>
                    <Text style={[styles.textBold]}>
                        Número do pedido: <Text style={{ fontWeight: 'normal', color: '#000' }}>123</Text>
                    </Text>
                    <Text style={[styles.textBold]}>Cliente: <Text style={{ fontWeight: 'normal', color: '#000' }}>Daniel Brito</Text></Text>
                    <Text style={[styles.textBold]}>Quantidade: <Text style={{ fontWeight: 'normal', color: '#000' }}>2</Text></Text>
                    <Text style={[styles.textBold]}>Total: <Text style={{ fontWeight: 'normal', color: '#000' }}>R$ 10,00</Text></Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 50, backgroundColor: Palette.primaryDark }}>
                    <MaterialIcons style={{
                        transform: [{
                            rotate: '180deg'
                        }]
                    }} color="#FFF" size={30} name="arrow-back" />
                </View>
            </View>
        </View>
    )
}

export function OrderScreen() {
    const [open, setOpen] = useState(false)

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
        </ScrollView>
    )
}