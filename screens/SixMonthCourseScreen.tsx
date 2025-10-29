import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ScreenType } from "../App";
 
interface SixMonthCourseScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}
 
const SixMonthCourseScreen: React.FC<SixMonthCourseScreenProps> = ({ setCurrentScreen, previousScreen }) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(previousScreen)}>
                <Text style={styles.backButtonText}>Return to previous screen</Text>
            </TouchableOpacity>
            <Text style={styles.title}>6-Month Courses</Text>
            {/* Add your course content here */}
        </ScrollView>
    );
};


 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
 
    backButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#92c3a5",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: 225,
        alignSelf: "center",
    },
 
    backButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
});
 
export default SixMonthCourseScreen;