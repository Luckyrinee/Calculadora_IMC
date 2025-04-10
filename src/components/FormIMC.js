import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import { useState } from 'react';
//Import dos componentes do Classification.js
import Classification, { classificarIMC } from './Classification';
//Import dos componentes do IdealWeight.js
import IdealWeight, { calcularPesoIdeal } from './IdealWeight';


const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    //Cria um novo estado chamado classificacao
    const [classificacao, setClassificacao] = useState('');
    //Cria novos estados para os pesos ideais
    const [pesoMin, setPesoMin] = useState(null);
    const [pesoMax, setPesoMax] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
            //Usa a função de classificar o IMC
            const resultadoClassificacao = classificarIMC(imcCalculado);
            //Salva o resultado
            setClassificacao(resultadoClassificacao)

            //Calcula os pesos ideais
            const {pesoMin, pesoMax} = calcularPesoIdeal(altura);
            setPesoMin(pesoMin);
            setPesoMax(pesoMax);
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            />
            <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {/*Exibe um texto com a classificação do IMC*/}
            {classificacao !== '' && <Classification classificacao={classificacao} />}

            {pesoMin && pesoMax && (
                <IdealWeight pesoMin={pesoMin} pesoMax={pesoMax} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#424242',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color: 'white',
    },
});

export default FormIMC