import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";

const Calculate = () => {
  const [amountUSD, setAmountUSD] = useState("");
  const [amountRWF, setAmountRWF] = useState("");

  const convertToRwf = () => {
    const exchangeRate = 1300;
    const usd = parseFloat(amountUSD);
    if (!isNaN(usd)) {
      const rwf = usd * exchangeRate;
      setAmountRWF(rwf.toFixed(3));
    }
  };
  // const solution = 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Convert USD To RWF:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'black', width: '80%', padding: 10, marginTop: 10 }}
        value={amountUSD}
        onChangeText={setAmountUSD}
        keyboardType="numeric"
      />
      <Button title="Convert to Rwf" style={{width: '80%'}} onPress={convertToRwf} />
      {amountRWF ? (<Text style={{marginTop: 40}}>Equivalent amount in Rwf: {amountRWF}</Text>): null}
    </View>
  );
};

export default Calculate;
