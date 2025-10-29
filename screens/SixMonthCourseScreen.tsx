import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image, // Added Image import
    SafeAreaView, // Added SafeAreaView import
    Dimensions, // Added Dimensions import
} from "react-native";
import { ScreenType } from "../App"; // Ensure ScreenType is correctly imported

const { width } = Dimensions.get('window');

// --- 1. TYPESCRIPT INTERFACE ---
interface Course {
    title: string;
    description: string;
    content: string[];
    imageUri: string;
}

// Interface for the main component props
interface SixMonthCourseScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}

// --- 2. COURSE DATA ARRAY ---
const sixMonthCourses: Course[] = [
  {
    title: 'FIRST AID',
    description:
      'This course provides first awareness and basic life support content. Content covered will be:',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress',
    ],
    imageUri: 'https://image2url.com/images/1761680486955-371cf361-2ef3-4072-9398-76d9884856ee.jpg',
  },
  {
    title: 'SEWING',
    description:
      'The sewing course equips students with skills in both alterations and creating new garments. Content covered will include:',
    content: [
      'Different types of stitches',
      'Threading and basic machine use',
      'Sewing buttons, zippers, hems, and seams',
      'Pattern reading',
      'Designing and making new garments',
    ],
    imageUri: 'https://image2url.com/images/1761640738538-375065a6-620f-462a-add4-623f45aef852.webp',
  },
  {
    title: 'LIFE SKILLS',
    description:
      'The aim of this course is to prepare participants with essential life skills, including:',
    content: [
      'How to open a bank account',
      'Understanding basic labour laws',
      'Fundamental reading and writing skills',
      'Basic numeracy skills',
    ],
    imageUri: 'https://image2url.com/images/1761641337035-8afdaa78-89a6-4950-90c6-a6b3d03bb275.png',
  },
  {
    title: 'LANDSCAPING',
    description:
      'The landscaping course offers skills and knowledge in designing, establishing, and maintaining established gardens. Vessel content will be covered such as:',
    content: [
      'Hydrology and water-wise gardening',
      'Fixed structures (fountains, statues, benches, birdbaths, etc.)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of design, texture, and colours',
      'Garden layout',
    ],
    imageUri: 'https://image2url.com/images/1761643107140-3c2988fe-5e3f-4359-b2ec-05208b5e5e9d.png',
  },
];

// --- 3. COURSE CARD COMPONENT (now accepts navigation function) ---
const CourseCard: React.FC<{ course: Course, setCurrentScreen: (screen: ScreenType) => void }> = ({ course, setCurrentScreen }) => {
  
    // Map the title string to the corresponding ScreenType enum value
   const getScreenType = (title: string): ScreenType => {
    switch (title) {
        // FIX: The error is here! You must remove the redundant 'ScreenType.' prefix in the return statement.
        // It should be 'case VALUE: return ENUM.MEMBER;'
        case 'FIRST AID': return ScreenType.FirstAid;
        case 'SEWING': return ScreenType.Sewing;
        case 'LIFE SKILLS': return ScreenType.LifeSkills;
        case 'LANDSCAPING': return ScreenType.Landscaping;
        default: return ScreenType.Home; // Assuming HOME is the fallback
    }
};
    
    const handleViewCourse = () => {
        const targetScreen = getScreenType(course.title);
        setCurrentScreen(targetScreen);
  };
 
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{course.title}</Text>
 
      <Image
        source={{ uri: course.imageUri }}
        style={styles.cardImage}
        resizeMode="cover"
      />
 
      <View style={styles.cardContent}>
        <Text style={styles.cardDescription}>{course.description}</Text>
 
        <View style={styles.bulletList}>
          {course.content.map((item, index) => (
            <Text key={index} style={styles.bulletText}>
              • {item}
            </Text>
          ))}
        </View>
 
        <TouchableOpacity
          style={styles.viewCourseButton}
          onPress={handleViewCourse}
        >
          <Text style={styles.viewCourseText}>VIEW COURSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SixMonthCourseScreen: React.FC<SixMonthCourseScreenProps> = ({ setCurrentScreen, previousScreen }) => {
    
    const handleMenuPress = () => console.log('Menu Pressed');

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <Image
                  source={{ uri: 'https://placehold.co/40x40/2E7D32/ffffff?text=Book' }}
                  style={styles.logo}
                />
                <Text style={styles.logoText}>Empowering{"\n"}the Nation</Text>
              </View>
              <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.mainHeadingContainer}>
                <Text style={styles.mainHeading}>6 Month Courses</Text>
            </View>

            <View style={styles.cardList}>
              {sixMonthCourses.map((course, index) => (
                <CourseCard 
                    key={index} 
                    course={course} 
                    setCurrentScreen={setCurrentScreen} 
                />
              ))}
            </View>

           
            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => setCurrentScreen(previousScreen)}
            >
                <Text style={styles.backButtonText}>Return to previous screen</Text>
            </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
  );
};

export default SixMonthCourseScreen;


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    scrollViewContainer: {
        paddingHorizontal: width * 0.04,
        paddingBottom: 30,
        alignItems: 'center', 
    },
  
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
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
    mainHeadingContainer: {
        backgroundColor: '#DDEEDD',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    mainHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    
    // --- Card List Styles ---
    cardList: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    card: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 25,
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2E7D32',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: '#EEF4EE',
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    cardContent: {
        padding: 15,
    },
    cardDescription: {
        fontSize: 13,
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
    },
    bulletList: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 15,
    },
    bulletText: {
        fontSize: 13,
        color: '#333',
        marginBottom: 3,
    },
    viewCourseButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    viewCourseText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },

    // --- Original Button Styles ---
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