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
 
export enum ScreenType {
    Home = 'HOME',
    SixMonthCourse = '6-MONTH COURSE', // Added for completeness, if used
    SixWeekCourse = '6-WEEK COURSE',
    ContactUs = 'CONTACT US',
    FeesCalculator = 'FEES CALCULATOR',
    ChildMinding = 'CHILD MINDING',
    Cooking = 'COOKING',
    FirstAid = 'FIRST AID',
    GardenMaintenance = 'GARDEN MAINTENANCE',
    Landscaping = 'LANDSCAPING',
    LifeSkills = 'LIFE SKILLS',
    Sewing = 'SEWING',
    ViewCourse = 'VIEW COURSE',
}
 
  export default function NavigationApp() {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>(ScreenType.Home); 
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
   
    const handleSelectCourse = (course: Course) => {
      setSelectedCourse(course);
      setCurrentScreen(ScreenType.ViewCourse);
    }
 
      const MainScreen = () =>{
        switch(currentScreen){
          case "HOME":
            return <HomeScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "6-MONTH COURSE":
            return <SixMonthCourseScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "6-WEEK COURSE":
            return <SixWeekCourseScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "CONTACT US":
            return <ContactUsScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "FEES CALCULATOR":
            return <FeesCalculator setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "CHILD MINDING": 
            return <ChildMindingScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "COOKING": 
            return <CookingScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "FIRST AID": 
            return <FirstAidScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "GARDEN MAINTENANCE": 
            return <GardeningMaintenanceScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "LANDSCAPING": 
            return <LandscapingScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "LIFE SKILLS": 
            return <LifeSkillsScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "SEWING": 
            return <SewingScreen setCurrentScreen={setCurrentScreen} previousScreen={currentScreen}/>;
          case "VIEW COURSE":
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
          case "GARDEN MAINTENANCE":
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