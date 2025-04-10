import React from "react";
import {Text, StyleSheet} from 'react-native';

//Função que classifica o IMC
const classificarIMC = (imc) => {
    const valor = parseFloat(imc);

    if (valor < 18.5) {
        return 'Abaixo do peso';
    } else if (valor >= 18.5 && valor <= 24.9) {
        return 'Peso normal';
    } else if (valor >= 25 && valor <= 29.9) {
        return 'Sobrepeso';
    } else if (valor >= 30 && valor <= 34.9) {
        return 'Obesidade grau 1';
    } else if (valor >= 35 && valor <= 39.9) {
        return 'Obesidade grau 2';
    } else if (valor >= 40) {
        return 'Obesidade grau 3 (obesidade mórbida)';
    }

    return 'IMC inválido';
};

//Componentes visuais
const Classification = ({ classificacao }) => {
    return (
        <Text style={styles.text}>Classificação: {classificacao}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 8,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
});

export { classificarIMC };
export default Classification;