import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./type/navigation";
import HomeScreen from "./screens/HomeScreen";
import SixMonthCourseScreen from "./screens/SixMonthCourseScreen";
import SixWeekCourseScreen from "./screens/SixWeekCourseScreen";  
import ViewCourseScreen from "./screens/ViewCourseScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import FeesCalculator from "./screens/FeesCalculatorScreen";
import ChildMindingScreen from "./screens/ChildMindingScreen";
import CookingScreen from "./screens/CookingScreen";
import FirstAidScreen from "./screens/FirstAidScreen";
import GardeningMaintenanceScreen from "./screens/GardeningMaintenanceScreen";
import LandscapingScreen from "./screens/LandscapingScreen";
import LifeSkillsScreen from "./screens/LifeSkillsScreen";
import SewingScreen from "./screens/SewingScreen";
 
 
 
export interface Course {
  id: string;
  courseName: string;
  courseDescription: string;
  courseDuration: string;
  courseFee: number;
}
 
 
export interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
 
}
 
export type ScreenType =
  | "Home"
  | "6-Month Course"
  | "6-Week Course"
  | "Contact Us"
  | "Fees Calculator"
  | "Details Screen"
  | "FIRST AID"
  | "SEWING"
  | "LANDSCAPING"
  | "LIFE SKILLS"
  | "CHILD MINDING"
  | "GARDEN MAINTANANCE"
  | "COOKING"
  | "ViewCourse";
 
  export default function NavigationApp() {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>("Home");
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
   
    const handleSelectCourse = (course: Course) => {
      setSelectedCourse(course);
      setCurrentScreen("ViewCourse");
    }
 
      const MainScreen = () =>{
        switch(currentScreen){
          case "Home":
            return <HomeScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "6-Month Course":
            return <SixMonthCourseScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "6-Week Course":
            return <SixWeekCourseScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "Contact Us":
            return <ContactUsScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "Fees Calculator":
            return <FeesCalculator setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "ViewCourse":
            if (selectedCourse) {
              return <ViewCourseScreen
                setCurrentScreen={setCurrentScreen}
                previousScreen={currentScreen}
                courseId={selectedCourse.id}
              />;
            }
            return <HomeScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "FIRST AID":
          case "SEWING":
          case "LANDSCAPING":
          case "LIFE SKILLS":
          case "CHILD MINDING":
          case "GARDEN MAINTANANCE":
          case "COOKING":
            // Create a mock course object for these static courses
            const staticCourse: Course = {
              id: currentScreen.toLowerCase(),
              courseName: currentScreen,
              courseDescription: "Course description",
              courseDuration: "6 weeks",
              courseFee: 0
            };
            return(
              <ViewCourseScreen
                setCurrentScreen={setCurrentScreen}
                previousScreen={currentScreen}
                courseId={staticCourse.id}
              />
            );
 
            default:
              return <HomeScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
         }
       };
 
       return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
 
          <Navigation
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
          <MainScreen />
        </SafeAreaView>
       );
    }
 
 
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});