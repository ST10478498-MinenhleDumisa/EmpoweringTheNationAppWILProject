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
// Assuming ScreenType and Course are defined in App.tsx
import { ScreenType, Course } from "../App"; 

// Get screen width once for responsive styling
const { width } = Dimensions.get('window');

// --- 1. COURSE TYPES & DATA ---
interface SixWeekItem {
    title: string;
    description: string;
    bullets: string[];
    imageUri: string;
}

const SIX_WEEK_DATA: SixWeekItem[] = [
    {
        title: 'CHILD MINDING',
        description:
            'The purpose of this course is to provide basic child and baby care. Content will include:',
        bullets: [
            'Birt to six-month-old baby needs',
            'Seven-month to one year old needs',
            'Toddler needs',
            'Educational toys',
        ],
        imageUri: 'https://placehold.co/300x150/f9f9f9/333333?text=Child+Minding',
    },
    {
        title: 'COOKING',
        description:
            'This course aims to prepare and cook nutritious family meals, such as:',
        bullets: [
            'Nutritional requirements for a healthy body',
            'Types of protein, carbohydrates and vegetables',
            'Food preparation',
            'Tasty and nutritious recipes',
            'Preparation and cooking of meals',
        ],
        imageUri: 'https://placehold.co/300x150/f9f9f9/333333?text=Cooking',
    },
    {
        title: 'GARDEN MAINTENANCE',
        description:
            'This course provides basic knowledge of watering, pruning and planting in a domestic garden. Topics include:',
        bullets: [
            'Water restrictions and the water-wise benefits of indigenous and exotic plants',
            'Pruning and propagation of plants',
            'Planting techniques for different plant types',
        ],
        imageUri: 'https://placehold.co/300x150/f9f9f9/333333?text=Garden+Maintenance',
    },
];

// --- 2. COMPONENT PROPS ---
interface SixWeekCourseScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    onSelectCourse: (course: Course) => void;
}

// --- 3. COURSE CARD COMPONENT ---
interface SixWeekCardProps {
    course: SixWeekItem;
    setCurrentScreen: (screen: ScreenType) => void;
    onSelectCourse: (course: Course) => void;
}

const SixWeekCard: React.FC<SixWeekCardProps> = ({ course, setCurrentScreen, onSelectCourse }) => {
    
    // Create a mock Course object to pass to the parent state
    const mockFullCourse: Course = {
        id: course.title.toLowerCase().replace(/ /g, '-'), 
        courseName: course.title,
        courseDescription: course.description,
        courseDuration: '6 weeks',
        courseFee: 500, // Example fee
    };

    const handleViewCourse = () => {
        onSelectCourse(mockFullCourse); 
        setCurrentScreen(ScreenType.ViewCourse);
    };

    return (
        <View style={combinedStyles.card}>
            <Text style={combinedStyles.cardTitle}>{course.title}</Text>
            <Image
                source={{ uri: course.imageUri }}
                style={combinedStyles.cardImage}
                resizeMode="cover"
            />
            <View style={combinedStyles.cardContent}>
                <Text style={combinedStyles.cardDescription}>{course.description}</Text>
                <View style={combinedStyles.bulletList}>
                    {course.bullets.map((bullet, index) => (
                        <Text key={index} style={combinedStyles.bulletText}>
                            • {bullet}
                        </Text>
                    ))}
                </View>
                <TouchableOpacity
                    style={combinedStyles.viewCourseButton}
                    onPress={handleViewCourse}
                >
                    <Text style={combinedStyles.viewCourseText}>VIEW COURSE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


// --- 4. MAIN SCREEN COMPONENT ---
const SixWeekCourseScreen: React.FC<SixWeekCourseScreenProps> = ({ setCurrentScreen, previousScreen, onSelectCourse }) => {
    
    const handleMenuPress = () => console.log('Menu Pressed');

    return (
        <SafeAreaView style={combinedStyles.safeArea}>
            <ScrollView contentContainerStyle={combinedStyles.scrollViewContainer}>
                
                {/* Back Button */}
                <TouchableOpacity style={combinedStyles.backButton} onPress={() => setCurrentScreen(previousScreen)}>
                    <Text style={combinedStyles.backButtonText}>Return to previous screen</Text>
                </TouchableOpacity>

                {/* Header */}
                <View style={combinedStyles.header}>
                    <View style={combinedStyles.logoContainer}>
                        <Image
                            source={{ uri: 'https://placehold.co/40x40/2E7D32/ffffff?text=Book' }}
                            style={combinedStyles.logo}
                        />
                        <Text style={combinedStyles.logoText}>Empowering{"\n"}the Nation</Text>
                    </View>
                    <TouchableOpacity onPress={handleMenuPress} style={combinedStyles.menuButton}>
                        <Text style={combinedStyles.menuIcon}>☰</Text>
                    </TouchableOpacity>
                </View>
        
                {/* Main Heading */}
                <View style={combinedStyles.mainHeadingContainer}>
                    <Text style={combinedStyles.mainHeading}>6 Week Short Courses</Text>
                </View>
        
                {/* Course Card List */}
                <View style={combinedStyles.cardList}>
                    {SIX_WEEK_DATA.map((course, index) => (
                        <SixWeekCard
                            key={index} 
                            course={course} 
                            setCurrentScreen={setCurrentScreen}
                            onSelectCourse={onSelectCourse}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SixWeekCourseScreen;

// --- 5. CONSOLIDATED STYLES ---
const combinedStyles = StyleSheet.create({
    // --- Layout and General ---
    safeArea: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    scrollViewContainer: {
        paddingHorizontal: width * 0.04,
        paddingBottom: 20,
    },
    backButton: {
        backgroundColor: "#92c3a5",
        paddingHorizontal: 20,
        paddingVertical: 12, 
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        width: 250, 
        alignSelf: "center",
    },
    backButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
    
    // --- Header Styles ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 20,
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

    // --- Heading Styles ---
    mainHeadingContainer: {
        backgroundColor: '#DDEEDD',
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 20,
        marginHorizontal: width * 0.01,
    },
    mainHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    
    // --- Card Styles ---
    cardList: {
        gap: 15,
    },
    card: {
        backgroundColor: '#EAEAEA',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#2E7D32',
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    cardImage: {
        width: '100%',
        height: width * 0.4,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardContent: {
        paddingHorizontal: 5,
    },
    cardDescription: {
        fontSize: 13,
        color: '#444',
        marginBottom: 10,
        lineHeight: 18,
        textAlign: 'center',
    },
    bulletList: {
        marginBottom: 15,
        paddingLeft: width * 0.1,
        alignSelf: 'flex-start',
    },
    bulletText: {
        fontSize: 12,
        color: '#333',
        marginBottom: 3,
        paddingLeft: 5,
    },
    viewCourseButton: {
        backgroundColor: '#D1E7C4',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#2E7D32',
    },
    viewCourseText: {
        color: '#2E7D32',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
