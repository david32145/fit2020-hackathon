import { StackActions, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput, TouchableRipple } from 'react-native-paper'
import { Palette } from '../styles/palette'

export function LoginScreen() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    async function login() {
        navigation.dispatch(StackActions.replace("DashboardScreen"))
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 100, marginBottom: 30 }} source={require('../../assets/icon.png')} />
            <TextInput
                label="Usuário"
                value={user}
                underlineColorAndroid={Palette.primary}
                style={{ marginBottom: 20, width: '100%', backgroundColor: 'transparent', height: 55 }}
                onChangeText={setUser}
                theme={{ colors: { primary: Palette.primary } }}
            />
            <TextInput
                label="Senha"
                value={password}
                secureTextEntry={true}
                underlineColorAndroid={Palette.primary}
                style={{ width: '100%', backgroundColor: 'transparent', height: 55 }}
                onChangeText={setPassword}
                theme={{ colors: { primary: Palette.primary } }}
            />

            <TouchableRipple
                style={{
                    height: 55,
                    backgroundColor: Palette.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    elevation: 4,
                    width: '100%',
                    marginTop: 80
                }}
                onPress={login}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: Palette.white
                    }}
                >
                    Login
                </Text>
            </TouchableRipple>
            <TouchableOpacity onPress={() => {
                navigation.navigate("CreateAccoutScreen")
            }}>
                <Text
                    style={{
                        fontSize: 16,
                        marginTop: 20,
                        color: Palette.primary
                    }}
                >Criar Conta</Text>
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 14,
                    marginTop: 15,
                    color: '#000'
                }}
            >Esqueci minha senha</Text>
            <StatusBar style="light" backgroundColor={Palette.primary} />
        </View>
    )
}