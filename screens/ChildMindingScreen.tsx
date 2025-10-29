import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Button } from "react-native";
import { ScreenType } from "../App";


// The ChildMindingScreenProps interface is correct and used below
interface ChildMindingScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}

export default function ChildMindingScreen({ setCurrentScreen, previousScreen }: ChildMindingScreenProps) {
    
    
    const handleGoBack = () => {
        setCurrentScreen(previousScreen);
    };

    return (
        <ImageBackground
            source={{ uri: "https://image2url.com/images/1761641259542-e70a4727-ec55-4686-812c-fdf2f7698262.jpg" }}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{ uri: "https://image2url.com/images/1761641337035-8afdaa78-89a6-4950-90c6-a6b3d03bb275.png" }}
                            style={styles.logo}
                            resizeMode="cover"
                        />
                        <Text style={styles.headerText}>Empowering{"\n"}the Nation</Text>
                    </View>
                    <Text style={styles.menuIcon}>☰</Text>
                </View>
                <Text style={styles.title}>Child Minding</Text>

                <Image
                    source={{ uri: "https://image2url.com/images/1761645093022-bf3306f0-1c2f-4856-a114-21fe7e8be523.jpg" }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <Text style={styles.description}>
                    The purpose of this course is to provide basic child and baby care. 
                </Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Course details:</Text>
                    <Text style={styles.listItem}>• Six-week short course</Text>
                    <Text style={styles.listItem}>
                        • Can be completed in-person at our different venues (see contact page for
                        in-person locations)
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Course content:</Text>
                    <Text style={styles.listItem}>• Birth to six-month old baby needs</Text>
                    <Text style={styles.listItem}>• Seven-month to one year old needs</Text> 
                    <Text style={styles.listItem}>• Toddler needs</Text> 
                    <Text style={styles.listItem}>• Educational toys</Text>
                </View>

                <Text style={styles.price}>R750.00 pp</Text>

                <View style={styles.bottomButtons}>
                    <Button 
                        title="Go Back" 
                        onPress={handleGoBack} 
                        color="#2E7D32" 
                    />
                </View>
                
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#d9d9d9",
    },
    container: {
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 6,
    },
    headerText: {
        fontSize: 12,
        color: "#333",
        fontWeight: "500",
    },
    menuIcon: {
        fontSize: 26,
        color: "#333",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2E7D32",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10,
        marginVertical: 12,
    },
    description: {
        textAlign: "center",
        color: "#555",
        fontSize: 13,
        marginBottom: 18,
    },
    section: {
        width: "100%",
        marginBottom: 16,
    },
    sectionTitle: {
        color: "#2E7D32",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 4,
    },
    listItem: {
        color: "#444",
        fontSize: 13,
        marginLeft: 6,
        marginBottom: 2,
    },
    price: {
        color: "#2E7D32",
        fontWeight: "bold",
        fontSize: 22,
        marginTop: 10,
        marginBottom: 30,
    },
    bottomButtons: {
        width: "80%",
        marginBottom: 50,
    },
});