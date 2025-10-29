import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
} from "react-native";
import { ScreenType } from "../App"; 

interface LifeSkillsScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}

const LifeSkillsScreen = ({ setCurrentScreen, previousScreen }: LifeSkillsScreenProps) => {
  
    
    const handleGoBack = () => {
        setCurrentScreen(previousScreen);
    };

  return (
    <ImageBackground
           source={{ uri: "https://image2url.com/images/1761641259542-e70a4727-ec55-4686-812c-fdf2f7698262.jpg" }}
           style={styles.background}
           resizeMode="cover"
    >

    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollContent}> 
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

             <Text style={styles.title}>LIFE SKILLS</Text>

            <Image
                source={{ uri: "https://image2url.com/images/1761641337035-8afdaa78-89a6-4950-90c6-a6b3d03bb275.png" }}
                style={styles.image}
                resizeMode="cover"
            />

        <Text style={styles.description}>
          The aim of this course is to prepare participants with essential life skills.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course details:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Six-month extensive course</Text>
            <Text style={styles.bulletPoint}>
              • Can be completed online or in-person (see contact page for
              in-person locations)
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course content:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Understanding basic labour laws</Text>
            <Text style={styles.bulletPoint}>• How to open a bank account</Text>
            <Text style={styles.bulletPoint}>• Fundamental reading and writing skills</Text>
            <Text style={styles.bulletPoint}>• Basic numeracy skills</Text>
          </View>
        </View>

        <Text style={styles.price}>R1500.00 pp</Text>

             <View style={styles.buttonContainer}>
                <Button 
                    title="Go Back" 
                    onPress={handleGoBack} 
                    color="#2E7D32" 
                />
            </View>
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LifeSkillsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },  
  scrollContent: { 
    flexGrow: 1, 
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    width: '100%',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  headerText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 15,
  },
  image: {
    width: "90%",
    height: 180,
    alignSelf: "center",
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 20, 
    lineHeight: 20,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%', 
    alignSelf: 'center',
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 5,
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontSize: 13,
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 30,
  },
  background: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: 26,
    color: "#333",
  },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        marginBottom: 30,
    }
});