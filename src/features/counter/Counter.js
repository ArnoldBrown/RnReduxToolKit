import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { increment, decrement, reset, incrementByAmount, decrementByAmount, } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{count}</Text>
            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                <Button onPress={() => dispatch(increment())} title='+' />
                <Button onPress={() => dispatch(decrement())} title='-' />
            </View>

            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
                    placeholder="Type here..."
                    onChangeText={(e) => setIncrementAmount(e)}
                    value={incrementAmount}
                />
            </View>

            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                <Button onPress={() => dispatch(incrementByAmount(addValue))} title='Add Amount' />
                <Button style={{marginLeft:10}} onPress={() => dispatch(decrementByAmount(addValue))} title='Minus Amount' />
                <Button onPress={() => resetAll()} title='Reset' />
            </View>
        </View>
    );
};

export default Counter;