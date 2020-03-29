import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, entrando em contato, para o caso ${incident.title} no valor ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;
    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso ',
            recipients: ['rafa36ap@gmail.com'],
            body: message,
        });
    }

    function sendWpp(){
        Linking.openURL(`whatsapp://send?phone=+5511973947345&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>
                    {incident.name} de {incident.city}, {incident.uf}
                </Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}
                </Text>
            </View>        

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Salve o herói desse caso.</Text>
                <Text style={styles.heroTitle}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText} onPress={sendWpp}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText} onPress={sendEmail}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}