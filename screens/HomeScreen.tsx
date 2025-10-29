import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView
} from "react-native";
import { ScreenType } from "../App"; 

const { width } = Dimensions.get('window');

interface HomeScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setCurrentScreen, previousScreen }) => {
    const handleMenuPress = () => console.log('Menu Pressed');

    return (
        <SafeAreaView style={homeStyles.safeArea}>
            <ScrollView contentContainerStyle={homeStyles.scrollViewContainer}>

                <View style={homeStyles.header}>
                    <View style={homeStyles.logoContainer}>
                        <Image
                            source={{ uri: 'https://advtechonline-my.sharepoint.com/personal/st10486576_vcconnect_edu_za/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fst10486576%5Fvcconnect%5Fedu%5Fza%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2Flogo%2Epng&parent=%2Fpersonal%2Fst10486576%5Fvcconnect%5Fedu%5Fza%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1' }}
                            style={homeStyles.logo}
                        />
                        <Text style={homeStyles.logoText}>Empowering{"\n"}the Nation</Text>
                    </View>
                    <TouchableOpacity onPress={handleMenuPress} style={homeStyles.menuButton}>
                        <Text style={homeStyles.menuIcon}>☰</Text>
                    </TouchableOpacity>
                </View>

                {/* Hero Section */}
                <View style={homeStyles.heroContainer}>
                    <Text style={homeStyles.heroTitle}>
                        Better Your Skills with{"\n"}
                        <Text style={homeStyles.heroTitleHighlight}>Empowering the Nation</Text>
                    </Text>

                    <Image
                        source={{ uri: 'https://advtechonline-my.sharepoint.com/personal/st10486576_vcconnect_edu_za/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fst10486576%5Fvcconnect%5Fedu%5Fza%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2Fgraduates%2Epng&parent=%2Fpersonal%2Fst10486576%5Fvcconnect%5Fedu%5Fza%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1' }}
                        style={homeStyles.heroImage}
                        resizeMode="contain"
                        onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
                    />

                    <Text style={homeStyles.descriptionText}>
                        Empowering the Nation was established in 2022 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both six-month long Learnership and the six-week short Skills Training Programmes to empower themselves and can provide more marketable skills.
                    </Text>
                </View>

                <View style={homeStyles.buttonRow}>
                    <TouchableOpacity 
                        style={homeStyles.courseButton}
                        onPress={() => setCurrentScreen(ScreenType.SixMonthCourse)}
                    >
                        <Text style={homeStyles.courseButtonText}>6 MONTH COURSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={homeStyles.courseButton}
                        onPress={() => setCurrentScreen(ScreenType.SixWeekCourse)}
                    >
                        <Text style={homeStyles.courseButtonText}>6 WEEK COURSE</Text>
                    </TouchableOpacity>
                </View>

                <View style={homeStyles.featuresRow}>
                    <View style={homeStyles.featureCard}>
                        <Text style={homeStyles.featureIcon}>🏅</Text>
                        <Text style={homeStyles.featureTitle}>Accredited Certification</Text>
                        <Text style={homeStyles.featureDescription}>Our courses come with certification which you can use to apply for domestic jobs.</Text>
                    </View>
                    <View style={homeStyles.featureCard}>
                        <Text style={homeStyles.featureIcon}>💻</Text>
                        <Text style={homeStyles.featureTitle}>In Person/Online</Text>
                        <Text style={homeStyles.featureDescription}>The training courses are available in person and online.</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;


const homeStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    scrollViewContainer: {
        paddingHorizontal: width * 0.04, 
        paddingBottom: 40,
        alignItems: 'center', 
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 20,
        width: '100%', 
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 8,
        borderRadius: 5,
    },
    logoText: {
        fontSize: 12,
        color: '#333',
        fontWeight: '500',
    },
    menuButton: {
        padding: 5,
    },
    menuIcon: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
    },

    // --- Hero Section Styles ---
    heroContainer: {
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    heroTitle: {
        fontSize: width * 0.075, 
        fontWeight: '300',
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: width * 0.09,
        fontStyle: 'italic',
    },
    heroTitleHighlight: {
        fontWeight: 'bold',
        color: '#2E7D32', 
        fontStyle: 'normal',
    },
    heroImage: {
        width: '100%',
        height: width * 0.5,
        marginBottom: 20,
        borderRadius: 10,
    },
    descriptionText: {
        fontSize: 13,
        color: '#444',
        textAlign: 'center',
        lineHeight: 20,
    },

   
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    courseButton: {
        backgroundColor: '#D1E7C4', 
        paddingVertical: 12,
        borderRadius: 8,
        width: '48%', 
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2E7D32',
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    courseButtonText: {
        color: '#2E7D32',
        fontWeight: '800',
        fontSize: 14,
    },

    // --- Features Section ---
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    featureCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        alignItems: 'center',
    },
    featureIcon: {
        fontSize: 30,
        marginBottom: 5,
    },
    featureTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 11,
        color: '#666',
        textAlign: 'center',
    },
});
