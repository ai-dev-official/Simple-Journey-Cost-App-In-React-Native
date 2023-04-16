import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native';


const JourneyCost = () => {
const [distance, setDistance] = useState('');
const [fuelCost, setFuelCost] = useState('');
const [journeyCost, setJourneyCost] = useState(null);

const handleSubmit = () => {
    const result = parseFloat(distance * fuelCost);
    setJourneyCost(result);
}

    return(
        <View style={styles.container}>
           <View style={styles.display}>
             <Text style={{
                fontSize: 22,
                fontWeight: '600',
                color: '#ff0037'
            }}>
               The journey Cost is:  €{journeyCost}
            </Text>
           </View>
            <View>
                <TextInput 
                 placeholder='Enter the distance'
                 style={styles.inputstyle}
                 keyboardType='numeric'
                 onChangeText={setDistance}
                />
                <TextInput 
                 placeholder='Enter the fuel cost'
                 style={styles.inputstyle}
                 keyboardType='numeric'
                 onChangeText={setFuelCost}
                />
            </View>

            <View 
            style={[styles.buttonContainer, {borderWidth:4, borderColor: '#ffd33d', borderRadius:18}]}>
                <Pressable 
                onPress={handleSubmit}
                style={[styles.button, {backgroundColor: '#ffffff'}]}
                >
                    <Text style={[styles.buttonLabel,{color: '#25292e'}]}>Get Journey Cost</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputstyle: {
        marginBottom: 20,
        width: 330,
        height: 68,
        fontSize: 24, 
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderRadius: 18,
        borderColor: '#ffffff'
    },
    buttonContainer: {
        with: 350,
        height: 68,
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        marginBottom: 10,
        backgroundColor: '#000000'
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 80,
        marginBottom: 10,
        backgroundColor: '#f3f3f3'
    },

    buttonLabel : {
        fontSize: 20,
    },
    display:{
        width: 330,
        height: 150,
        marginBottom: 20,
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 18,
         backgroundColor: '#d4d4d4'
    }


});
export default JourneyCost;