import React from "react";
import Counter from "../features/counter/Counter";
import { store } from "./store"; 
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    const theme = "light"
    return (
      <Provider store={store}>
          <SafeAreaProvider>
            <Counter />
          </SafeAreaProvider>
      </Provider>
    );
  }