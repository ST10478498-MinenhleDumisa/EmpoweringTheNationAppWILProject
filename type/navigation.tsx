import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView  } from "react-native";
import { ScreenType } from "../App";
 
interface NavigationProps{
    currentScreen: ScreenType;
    setCurrentScreen: (screen: ScreenType) => void;
}
 
const Navigation: React.FC<NavigationProps> = ({currentScreen, setCurrentScreen}) => {
    return(
        <View style={styles.navContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                style={[styles.navButton, currentScreen === "Home" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("Home")}>
                <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                style={[styles.navButton, currentScreen === "6-Month Course" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("6-Month Course")}>
                <Text style={styles.navButtonText}>6 Month Course</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                style={[styles.navButton, currentScreen === "6-Week Course" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("6-Week Course")}>
                <Text style={styles.navButtonText}>6 Week Course</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                style={[styles.navButton, currentScreen === "Fees Calculator" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("Fees Calculator")}>
                <Text style={styles.navButtonText}>Checkout</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                style={[styles.navButton, currentScreen === "Contact Us" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("Contact Us")}>
                <Text style={styles.navButtonText}>Contacts</Text>
                </TouchableOpacity>
 
                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "ViewCourse" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("ViewCourse")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "CHILD MINDING" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("CHILD MINDING")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "FIRST AID" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("FIRST AID")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "GARDEN MAINTENANCE" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("GARDEN MAINTENANCE")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "LANDSCAPING" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("LANDSCAPING")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "SEWING" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("SEWING")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "LIFE SKILLS" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("LIFE SKILLS")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                style={[styles.navButton, currentScreen === "COOKING" && styles.navButtonActive]}
                onPress={() => setCurrentScreen("COOKING")}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
 
const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: "#92c3a5",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#92c3a5"
    },
 
    navButton: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginHorizontal: 5,
    },
 
    navButtonActive: {
        backgroundColor: "#4b9960",
        borderRadius: 5,
    },
 
    navButtonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "600",
    },
});
 
export default Navigation;