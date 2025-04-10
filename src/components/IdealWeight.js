import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Função que calcula os pesos ideais
const calcularPesoIdeal = (alturaCm) => {
    const alturaM = parseFloat(alturaCm) / 100;
    const pesoMin = parseFloat (18.5 * alturaM * alturaM ).toFixed(1);
    const pesoMax = parseFloat (24.9 * alturaM * alturaM ).toFixed(1);

    return {pesoMin, pesoMax};
}

//Componentes visuais
const IdealWeight = ({ pesoMin, pesoMax}) => {
    return (
        <Text style={styles.text}>
            Peso ideal: está entre {pesoMin} kg e {pesoMax} kg
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 8,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
});

export default IdealWeight;
export { calcularPesoIdeal };