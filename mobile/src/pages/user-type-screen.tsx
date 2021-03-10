import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Palette } from '../../src/styles/palette';
import { TouchableRipple } from 'react-native-paper'
import { StackActions, useNavigation } from '@react-navigation/native';

type CardProps = {
    onPress: () => void,
    color: string,
    title: string
}

export function Card({ onPress, color, title }: CardProps) {
    return (
        <View style={{ paddingHorizontal: 20, width: '100%', marginBottom: 20 }}>
            <TouchableRipple
                style={{
                    height: 80,
                    backgroundColor: color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    elevation: 4
                }}
                onPress={onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: Palette.white
                    }}
                >
                    {title}
                </Text>
            </TouchableRipple>
        </View>
    )
}

export function UserTypeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 30,
                    color: Palette.primaryDark,
                    fontWeight: 'bold',
                    marginBottom: 40
                }}
            >Quem sou eu?</Text>
            <Card title="Cliente" onPress={() => {
                navigation.dispatch(StackActions.replace("LoginScreen", {
                    userType: 'CLIENT'
                }))
            }} color={Palette.primaryDark} />
            <Card title="Produtor" onPress={() => {
                navigation.dispatch(StackActions.replace("LoginScreen", {
                    userType: 'PRODUCER'
                }))
            }} color={Palette.primaryLight} />
            <StatusBar style="light" backgroundColor={Palette.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});