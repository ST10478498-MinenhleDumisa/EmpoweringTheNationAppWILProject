import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { ScreenType } from "../App";
 
interface FeeCalculatorScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
}
 
const FeeCalculator: React.FC<FeeCalculatorScreenProps> = ({ setCurrentScreen, previousScreen }) => {
    return (
        <ScrollView style={styles.screen}>
            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen(previousScreen)}>
                <Text style={styles.backButtonText}>Return to previous screen</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
 
const courses = {
  "First aid (R1500)": 1500,
  "Sewing (R1500)": 1500,
  "Landscaping (R1500)": 1500,
  "Life skills (R1500)": 1500,
  "Child minding (R750)": 750,
  "Cooking (R750)": 750,
  "Garden maintenance (R750)": 750,
};
 
type CourseKey = keyof typeof courses;
 
const CourseFeeCalculator = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<CourseKey[]>([]);
  const [total, setTotal] = useState<number | null>(null);
 
  const toggleCourse = (course: CourseKey) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };
 
  const calculateFees = () => {
    if (selectedCourses.length === 0) {
      Alert.alert("Please select at least one course");
      return;
    }
 
    const subtotal = selectedCourses.reduce(
      (acc, course) => acc + courses[course],
      0
    );
 
    // Apply discount
    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.1;
    else if (selectedCourses.length > 3) discount = 0.15;
 
    const discountedTotal = subtotal - subtotal * discount;
    const vat = discountedTotal * 0.15;
    const totalWithVat = discountedTotal + vat;
 
    setTotal(totalWithVat);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Empowering the Nation</Text>
        </View>
 
        <Text style={styles.title}>Course Fee Calculator</Text>
 
        <Text style={styles.subtitle}>Enter your contact details</Text>
 
        {/* Contact form */}
        <View style={styles.formRow}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.inputHalf}
          />
          <TextInput
            placeholder="Surname"
            value={surname}
            onChangeText={setSurname}
            style={styles.inputHalf}
          />
        </View>
 
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          style={styles.inputFull}
          keyboardType="email-address"
        />
 
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => Alert.alert("Details Saved")}
        >
          <Text style={styles.saveText}>Save Details</Text>
        </TouchableOpacity>
 
        {/* Discounts */}
        <View style={styles.discountBox}>
          <Text style={styles.discountText}>
            <Text style={{ fontWeight: "bold" }}>Discounts Available:</Text>
            {"\n"}One Course - No Discount{"\n"}Two Courses - 5% Discount{"\n"}
            Three Courses - 10% Discount{"\n"}
            More Than Three Courses - 15% Discount
          </Text>
        </View>
 
        {/* Course Selection */}
        <Text style={styles.sectionTitle}>
          Select the courses you are interested in:
        </Text>
 
        <View style={styles.courseRow}>
          <View style={styles.courseColumn}>
            <Text style={styles.columnTitle}>6-month courses:</Text>
            {(Object.keys(courses) as CourseKey[])
              .slice(0, 4)
              .map((course) => (
                <TouchableOpacity
                  key={course}
                  onPress={() => toggleCourse(course)}
                  style={styles.courseItem}
                >
                  <Text style={styles.checkbox}>
                    {selectedCourses.includes(course) ? "✓" : "☐"}
                  </Text>
                  <Text style={styles.courseText}>{course}</Text>
                </TouchableOpacity>
              ))}
          </View>
 
          <View style={styles.courseColumn}>
            <Text style={styles.columnTitle}>6-week short courses:</Text>
            {(Object.keys(courses) as CourseKey[])
              .slice(4)
              .map((course) => (
                <TouchableOpacity
                  key={course}
                  onPress={() => toggleCourse(course)}
                  style={styles.courseItem}
                >
                  <Text style={styles.checkbox}>
                    {selectedCourses.includes(course) ? "✓" : "☐"}
                  </Text>
                  <Text style={styles.courseText}>{course}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
 
        {/* Calculate Button */}
        <TouchableOpacity style={styles.calcButton} onPress={calculateFees}>
          <Text style={styles.calcText}>Calculate fees</Text>
        </TouchableOpacity>
 
        {/* Results */}
        {total !== null && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>
              Total quoted fee (including VAT and discounts)
            </Text>
            <Text style={styles.resultText}>
              <Text style={{ fontWeight: "bold" }}>Selected courses:</Text>
              {"\n"}
              {selectedCourses.join("\n")}
              {"\n\n"}
              <Text style={{ fontWeight: "bold" }}>
                Total (including VAT):{" "}
              </Text>
              R{total.toFixed(2)}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
 
export default FeeCalculator;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    alignItems: "center",
    marginTop: 10,
  },
  logoText: {
    fontSize: 13,
    color: "#568366",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#568366",
    marginVertical: 10,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  inputHalf: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
  },
  inputFull: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 20,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#92c3a5",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
  discountBox: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  discountText: {
    fontSize: 13,
    color: "#568366",
    textAlign: "center",
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 25,
    color: "#568366",
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  courseColumn: {
    width: "45%",
  },
  columnTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  checkbox: {
    fontSize: 16,
    marginRight: 6,
  },
  courseText: {
    fontSize: 13,
  },
  calcButton: {
    backgroundColor: "#92c3a5",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  calcText: {
    fontWeight: "bold",
    color: "#fff",
  },
  resultBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 20,
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  resultTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 13,
    color: "#568366",
    lineHeight: 18,
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
 
    screen: {
        flex: 1,
        padding: 20,
    },
});