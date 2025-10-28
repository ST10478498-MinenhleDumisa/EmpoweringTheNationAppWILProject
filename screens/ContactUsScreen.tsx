import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
import { ScreenType } from "../App";
import MapView, { Marker } from "react-native-maps";
 
interface ContactUsScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}
 
const ContactUsScreen: React.FC<ContactUsScreenProps> = ({setCurrentScreen, previousScreen }) => {
    return (
        <ScrollView style={styles.screen}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(previousScreen)}>
                <Text style={styles.backButtonText}>Return to previous screen</Text>
            </TouchableOpacity>
 
            <Text style={styles.ScreenHeading}>Locations</Text>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Fordsburg@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    011 123 4567
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    23 Terrace Road, Fordsburg, Johannesburg 2033
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.2067433471839,
                        longitude: 28.02397006788084,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.2067433471839, longitude: 28.02397006788084 }}
                        title="Fordsburg"
                        description="23 Terrace Road, Fordsburg, Johannesburg 2033"
                    />
                </MapView>
            </View>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Observatory@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    034 541 6972
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    11 Kloof Street, Observatory, Johannesburg, 2037
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.1776,
                        longitude: 28.0576,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.1776, longitude: 28.0576 }}
                        title="Observatory"
                        description="11 Kloof Street, Observatory, Johannesburg, 2037"
                    />
                </MapView>
            </View>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Marshalltown@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    072 347 6544
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    68 Albert St, Marshalltown, Johannesburg, 2107
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.2022,
                        longitude: 28.0456,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.2022, longitude: 28.0456 }}
                        title="Marshalltown"
                        description="68 Albert St, Marshalltown, Johannesburg, 2107"
                    />
                </MapView>
            </View>
        </ScrollView>
    );
};
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
    },
 
    ScreenHeading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#568366",
        marginBottom: 28,
        textAlign: "center",
       
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
 
    contactUs: {
        alignItems: "center",
        marginVertical: 30,
    },
 
    contactDetails: {
        fontSize: 18,
        color: "#568366",
        fontWeight: "600",
        marginVertical: 5,
    },
 
    locationCard: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#568366"
 
    },
 
     locations: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#568366",
        marginBottom: 28,
        textAlign: "center",  
    },
 
    locationText: {
        fontSize: 15,
        lineHeight: 22,
        color: "#568366",
        marginBottom: 5,
        opacity: 0.9,
    },
 
    highlight: {
        color: "#568366",
        fontWeight: "bold",
        minWidth: 100,
    },
 
    contactRow: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "flex-start",
    },
 
    contactText: {
        flex: 1,
        fontSize: 15,
        color: "#568366",
        opacity: 0.9,
    },
 
    map: {
        width: "100%",
        height: 180,
        marginTop: 10,
        borderRadius: 10,
    },
});
 
export default ContactUsScreen