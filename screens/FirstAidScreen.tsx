import React from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Button, 
} from "react-native";
import { ScreenType } from "../App"; 

interface FirstAidScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}


const FirstAidScreen = ({ setCurrentScreen, previousScreen }: FirstAidScreenProps) => {
    const handleGoBack = () => {
        setCurrentScreen(previousScreen);
    };
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

         <View style={styles.header}>
           <Image
              source={require("../assets/logo.png")} 
              style={styles.logo}
              resizeMode="contain"
           />
             <Text style={styles.headerText}>Empowering the Nation</Text>
          </View>

            <Text style={styles.title}>FIRST AID</Text>

           <Image
             source={require("../assets/firstaid.jpg")}
             style={styles.image}
             resizeMode="cover"
            />

            <Text style={styles.description}>
              This course equips students with skills that will allow them to provide
              first aid awareness and basic life support.
           </Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course details:</Text>
              <View style={styles.bulletList}>
               <Text style={styles.bulletPoint}>• **Six-month extensive course**</Text>
                <Text style={styles.bulletPoint}>
                 • Can be completed online or in-person (see contact page for
                   in-person locations)
                </Text>
             </View>
           </View>


            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course content:</Text>
             <View style={styles.bulletList}>
                 <Text style={styles.bulletPoint}>• Wounds and bleeding</Text>
                 <Text style={styles.bulletPoint}>• Burns and fractures</Text>
                 <Text style={styles.bulletPoint}>• Emergency scene management</Text>
                <Text style={styles.bulletPoint}>
                 • **Cardio-Pulmonary Resuscitation (CPR)**
               </Text>
               <Text style={styles.bulletPoint}>
                 • Respiratory distress, e.g. choking, blocked airway
               </Text>
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
 );
};

export default FirstAidScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
 },
   header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
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
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        marginBottom: 30,
    }
});