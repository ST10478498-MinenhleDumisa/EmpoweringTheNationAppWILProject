import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ScreenType } from "../App"; // Ensure this path is correct
 
interface NavigationProps{
    currentScreen: ScreenType;
    setCurrentScreen: (screen: ScreenType) => void;
}
 
const Navigation: React.FC<NavigationProps> = ({currentScreen, setCurrentScreen}) => {
    return(
        <View style={styles.navContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                // FIX: Use ScreenType.Home for comparison and onPress
                style={[styles.navButton, currentScreen === ScreenType.Home && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.Home)}>
                <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                // FIX: Use ScreenType.SixMonthCourse for comparison and onPress
                style={[styles.navButton, currentScreen === ScreenType.SixMonthCourse && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.SixMonthCourse)}>
                <Text style={styles.navButtonText}>6 Month Course</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                // FIX: Use ScreenType.SixWeekCourse
                style={[styles.navButton, currentScreen === ScreenType.SixWeekCourse && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.SixWeekCourse)}>
                <Text style={styles.navButtonText}>6 Week Course</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                // FIX: Use ScreenType.FeesCalculator
                style={[styles.navButton, currentScreen === ScreenType.FeesCalculator && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.FeesCalculator)}>
                <Text style={styles.navButtonText}>Checkout</Text>
                </TouchableOpacity>
 
                <TouchableOpacity
                // FIX: Use ScreenType.ContactUs
                style={[styles.navButton, currentScreen === ScreenType.ContactUs && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.ContactUs)}>
                <Text style={styles.navButtonText}>Contacts</Text>
                </TouchableOpacity>
 
                 <TouchableOpacity
                // FIX: Use ScreenType.ViewCourse
                style={[styles.navButton, currentScreen === ScreenType.ViewCourse && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.ViewCourse)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.ChildMinding (Note: Fixed lowercase typo in onPress call)
                style={[styles.navButton, currentScreen === ScreenType.ChildMinding && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.ChildMinding)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.FirstAid
                style={[styles.navButton, currentScreen === ScreenType.FirstAid && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.FirstAid)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.GardenMaintenance
                style={[styles.navButton, currentScreen === ScreenType.GardenMaintenance && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.GardenMaintenance)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.Landscaping
                style={[styles.navButton, currentScreen === ScreenType.Landscaping && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.Landscaping)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.Sewing
                style={[styles.navButton, currentScreen === ScreenType.Sewing && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.Sewing)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.LifeSkills
                style={[styles.navButton, currentScreen === ScreenType.LifeSkills && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.LifeSkills)}>
                <Text style={styles.navButtonText}>Read More</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                // FIX: Use ScreenType.Cooking
                style={[styles.navButton, currentScreen === ScreenType.Cooking && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.Cooking)}>
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