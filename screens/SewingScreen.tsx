import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Button } from "react-native";

type RootStackParamList = {
  Home: undefined;
  FirstAid: undefined;
};

type Props = {
  navigation: {
    navigate: (screen: keyof RootStackParamList) => void;
    goBack?: () => void;
  };
  route?: {
    name?: string;
    params?: object | undefined;
  };
};

export default function FirstAidScreen({ navigation }: Props) {
  return (
    <ImageBackground
       source={require("https://image2url.com/images/1761641259542-e70a4727-ec55-4686-812c-fdf2f7698262.jpg")}
       style={styles.background}
       resizeMode="cover"

    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
               source={require("https://image2url.com/images/1761641337035-8afdaa78-89a6-4950-90c6-a6b3d03bb275.png")}
               style={styles.logo}
               resizeMode="cover"
            />
            <Text style={styles.headerText}>Empowering{"\n"}the Nation</Text>
          </View>
          <Text style={styles.menuIcon}>☰</Text>
        </View>

        <Text style={styles.title}>Sewing</Text>

        <Image
          source={require("https://image2url.com/images/1761640738538-375065a6-620f-462a-add4-623f45aef852.webp")}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.description}>
          This course equips students with skills that will allow them to
          provide first aid awareness and basic life support.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course details:</Text>
          <Text style={styles.listItem}>• Six-month extensive course</Text>
          <Text style={styles.listItem}>
            • Can be completed online or in-person (see contact page for
            in-person locations)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course content:</Text>
          <Text style={styles.listItem}>• Wounds and bleeding</Text>
          <Text style={styles.listItem}>• Burns and fractures</Text>
          <Text style={styles.listItem}>• Emergency scene management</Text>
          <Text style={styles.listItem}>
            • Cardio-Pulmonary Resuscitation (CPR)
          </Text>
          <Text style={styles.listItem}>
            • Respiratory distress, e.g. choking, blocked airway
          </Text>
        </View>

        <Text style={styles.price}>R1500.00 pp</Text>

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