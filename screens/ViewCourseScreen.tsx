import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ScreenType } from "../App";
 
interface ViewCourseScreenProps {
  courseId: string;
  setCurrentScreen: (screen: ScreenType) => void;
  previousScreen: ScreenType;
}
 
interface CourseDetailsType {
  [key: string]: {
    objective: string;
    curriculum: string[];
  };
}
 
interface Course {
  id: string;
  name: string;
  price: number;
}
 
const Courses: Course[] = [
  { id: "FIRST-AID", name: "First-Aid", price: 1500 },
  { id: "SEWING", name: "Sewing", price: 1500 },
  { id: "LANDSCAPING", name: "Landscaping", price: 1500 },
  { id: "LIFE-SKILLS", name: "Life Skills", price: 1500 },
  { id: "CHILD-MINDING", name: "Child Minding", price: 750 },
  { id: "COOKING", name: "Cooking", price: 750 },
  { id: "GARDEN-MAINTENANCE", name: "Garden Maintenance", price: 750 },
];
 
const courseDetailsData: CourseDetailsType = {
  "FIRST-AID": {
    objective:
      "This course provides first aid awareness and basic life support. Content covered will be: Wounds and bleeding, Burns and fractures, Emergency scene management, Cardio-Pulmonary Resuscitation (CPR), Respiratory distress.",
    curriculum: [
      "This course equips students with skills that will allow them to provide first aid awareness and basic life support.",
      "COURSE DETAILS:",
      "Six-month extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Wound And Bleeding",
      "Burns And Fractures",
      "Emergency scene management",
      "Cardio-Pulmonary Resuscitation",
      "Respiratory distress e.g. choking, blocked airway",
    ],
  },
  SEWING: {
    objective: "Teaching students to provide alterations and garment tailoring services",
    curriculum: [
      "COURSE DETAILS:",
      "Six-month extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems, and seams",
      "Alterations",
      "Designing and sewing new Garments",
    ],
  },
  LANDSCAPING: {
    objective: "Teaches students to provide landscaping services for new and established gardens",
    curriculum: [
      "COURSE DETAILS:",
      "Six-month extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Indigenous and exotic plants and trees",
      "Fixed structures (fountains, statues, bench, tables, built-in braais)",
      "Balancing of plants and trees in a garden",
      "Aesthetics of plant shapes and colours",
    ],
  },
  "LIFE-SKILLS": {
    objective: "Teaches students to provide skills to navigate basic life necessities.",
    curriculum: [
      "COURSE DETAILS:",
      "Six-month extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Opening a bank account",
      "Basic labour law (Know your rights)",
      "Basic reading and writing literacy",
      "Basic numeric literacy",
    ],
  },
  "CHILD-MINDING": {
    objective: "Teaches students to provide basic child and baby care.",
    curriculum: [
      "COURSE DETAILS:",
      "Six-week extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys",
    ],
  },
  COOKING: {
    objective: "Teaches students to prepare and cook nutritious family meals.",
    curriculum: [
      "COURSE DETAILS:",
      "Six-week extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Tasty and nutritious recipes",
      "Planning meals",
      "Preparation and cooking of meals",
    ],
  },
  "GARDEN-MAINTENANCE": {
    objective: "Teaches students to provide basic knowledge of watering.",
    curriculum: [
      "COURSE DETAILS:",
      "Six-week extensive course",
      "Can be completed online or in-person (see contact page for the in-person location)",
      "COURSE CONTENT:",
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques of different plant types",
    ],
  },
};
 
const CourseDetails: React.FC<ViewCourseScreenProps> = ({ courseId, setCurrentScreen }) => {
  const course = Courses.find((c) => c.id === courseId);
  const details = courseDetailsData[courseId];
  const HomeScreen: ScreenType =
    course && course.price === 1500 ? "6-Month Course" : "6-Week Course";
 
  if (!course || !details) {
    return null;
  }
 
  return (
    <ScrollView style={styles.screen}>
      <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(HomeScreen)}>
        <Text style={styles.backButtonText}>← Return To View Programmes</Text>
      </TouchableOpacity>
 
      <Text style={styles.screenHeading}>{course.name}</Text>
      <Text style={styles.coursePriceLarge}>R{course.price}</Text>
 
      <Text style={styles.sectionHeading}>Programme Offers</Text>
      <Text style={styles.bodyText}>{details.objective}</Text>
 
      <Text style={styles.sectionHeading}>Curriculum Preview</Text>
      {details.curriculum.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          • {item}
        </Text>
      ))}
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
 
  },
  screenHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  coursePriceLarge: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3baa73ff",
    marginBottom: 30,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 28,
    color: "#555",
    paddingLeft: 10,
    marginBottom: 8,
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
});
 
export default CourseDetails;