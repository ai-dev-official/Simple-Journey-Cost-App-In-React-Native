import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const GradientBackground = ({children}) =>{
    return (
        <>
        <StatusBar translucent GradientBackground="tranparent" />
        <LinearGradient colors={[ '#fb7185', '#6d29d8' ]} style={styles.container}>
            {children}
        </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default GradientBackground;