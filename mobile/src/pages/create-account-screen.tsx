import { StackActions, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput, TouchableRipple } from 'react-native-paper'
import { Palette } from '../styles/palette'

export function CreateAccoutScreen() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigation = useNavigation()

    async function createAccout() {
        navigation.dispatch(StackActions.replace("DashboardScreen"))
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 100, height: 100, marginBottom: 30 }} source={require('../../assets/icon.png')} />
            <TextInput
                label="Nome"
                value={name}
                underlineColorAndroid={Palette.primary}
                style={{ marginBottom: 20, width: '100%', backgroundColor: 'transparent', height: 55 }}
                onChangeText={setName}
                theme={{ colors: { primary: Palette.primary } }}
            />
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
                    marginTop: 60
                }}
                onPress={createAccout}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: Palette.white
                    }}
                >
                    Criar
                </Text>
            </TouchableRipple>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Text
                    style={{
                        fontSize: 16,
                        marginTop: 20,
                        color: Palette.primary
                    }}
                >Voltar</Text>
            </TouchableOpacity>
            <StatusBar style="light" backgroundColor={Palette.primary} />
        </View>
    )
}