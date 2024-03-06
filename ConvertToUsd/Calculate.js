import React, { useState } from 'react';
import {TextInput, View} from 'react-native';

const Calculate = () => {
    const [amountUSD, SetAmoutUSD] = useState('');
    const [amoutRWF, setAmoutRWF] = useState('');

    const ConvertToRwf =()=>{
        const exchangeRate = 1300;
        const usd = parseFloat(amountUSD);
        if(!isNaN(usd)){
            
        }
    }
    return (
        <View>
            <TextInput />
        </View>
    );
}

// const styles = StyleSheet.create({})

export default Calculate;
