import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
 
const { width } = Dimensions.get('window');
 
 
const GardenMaintenanceScreen: React.FC = () => {
  const handleMenuPress = () => console.log('Menu Pressed');
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
       
     
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://image2url.com/images/1761641337035-8afdaa78-89a6-4950-90c6-a6b3d03bb275.png' }}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Empowering{"\n"}the Nation</Text>
          </View>
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
 
   
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Garden Maintenance</Text>
        </View>
 
        <Image
          source={{ uri: "https://image2url.com/images/1761727139057-ad245e0a-dc9a-481d-a920-ace751d3de71.jpg" }}
          style={styles.courseImage}
          resizeMode="cover"
        />
 
       
        <View style={styles.contentContainer}>
         
          <Text style={styles.description}>
            This course equips students with basic knowledge of **watering, pruning and planting greenery in a domestic garden.**
          </Text>
 
         
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Course details:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletPoint}>• **Six-week short course**</Text>
              <Text style={styles.bulletPoint}>
                • Can be completed online or in-person (see contact page
                for in-person locations)
              </Text>
            </View>
          </View>
 
          {/* --- Course Content Section --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Course content:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletPoint}>
                • **Water restrictions** and water requirements of indigenous
                and exotic plants
              </Text>
              <Text style={styles.bulletPoint}>
                • Pruning and **propagation of plants**
              </Text>
              <Text style={styles.bulletPoint}>
                • **Planting techniques** for different plans
              </Text>
            </View>
          </View>
 
          {/* --- Price --- */}
          <Text style={styles.price}>R750.00 pp</Text>
        </View>
 
      </ScrollView>
    </SafeAreaView>
  );
};
 
export default GardenMaintenanceScreen;
 
 
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Match overall background
  },
  scrollContent: {
    paddingHorizontal: width * 0.04,
    paddingBottom: 30,
  },
 
  // --- Header Styles ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10,
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
 
  // --- Title Styles ---
  titleContainer: {
    backgroundColor: '#DDEEDD', // Light background for title block
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: width * 0.01,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
 
 
  courseImage: {
    width: '100%',
    height: width * 0.5,
    borderRadius: 8,
    marginBottom: 15,
  },
 
  contentContainer: {
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#2E7D32',
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  bulletList: {
    alignItems: 'center',
  },
  bulletPoint: {
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
    lineHeight: 18,
    maxWidth: '90%',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 30,
  },
});