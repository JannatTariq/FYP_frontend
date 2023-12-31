import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const WorkerHomeScreen = () => {
  const navigation = useNavigation();

  const areaDemo = "200 sq. ft.";
  const expectedPriceDemo = "$50,000";
  const bedroomsDemo = 3;
  const bathroomsDemo = 2;

  const clientProjects = [
    {
      id: 1,
      clientName: "Fatima",
      projectName: "Project 1",
      projectDetails: {
        description: "Property in Johar Town.",
        area: "200 sq. ft.",
        location: "349-L Block Johar Town",
        expectedPrice: "Rs. 2,000,000",
        bedrooms: 5,
        bathrooms: 4,
      },
    },
    {
      id: 2,
      clientName: "Aaliyan",
      projectName: "Project 2",
      projectDetails: {
        description: "100 square feet property in Cantt",
        area: "100 sq. ft.",
        location: "359-F Block Cantt",
        expectedPrice: "Rs. 1,000,000",
        bedrooms: 3,
        bathrooms: 2,
      },
    },
  ];

  const [projects, setProjects] = useState(clientProjects);
  const handleBidding = () => {
    navigation.navigate("BiddingSearchScreen");
  };
  const renderProjectList = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: "row" }}
      >
        {projects.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={styles.projectCard}
            onPress={() => navigation.navigate("BidToProposal", project)}
          >
            <Text style={styles.projectName}>{project.projectName}</Text>
            <Text style={styles.projectName}>{project.clientName}</Text>
            <Text style={styles.projectDescription}>
              {project.projectDetails.description}
              {project.projectDetails.area}
              {project.projectDetails.location}
              {project.projectDetails.expectedPrice}
              {project.projectDetails.bedrooms}
              {project.projectDetails.bathrooms}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Your Home Page!</Text>

        <View style={styles.tipContainer}>
          <Text style={styles.tipHeading}>Tip of the Day</Text>
          <Text style={styles.tipText}>
            Always ensure to communicate effectively with clients to understand
            their project requirements thoroughly.
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.subHeading}>Your Projects:</Text>
          {renderProjectList()}
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem} onPress={handleBidding}>
          <Ionicons name="search" size={30} color="#00716F" />
          <Text>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomBarItem}
          onPress={() => navigation.navigate("WorkerProfileScreen")}
        >
          <Ionicons name="person" size={30} color="#00716F" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f0f8ff", // Light green background
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    flex: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#00716F", // Dark green text color
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#00716F", // Dark green text color
  },
  projectCard: {
    width: 150,
    height: 200,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff", // White background for each project card
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#00716F", // Dark green text color
  },
  projectDescription: {
    fontSize: 14,
    color: "#333", // Dark gray text color
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF", // Dark green background for bottom bar
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottomBarItem: {
    alignItems: "center",
  },
  tipContainer: {
    backgroundColor: "#d3f5e9", // Light green background for tip container
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  tipHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00716F", // Dark green text color
  },
  tipText: {
    fontSize: 16,
    color: "#333", // Dark gray text color
  },
});

export default WorkerHomeScreen;
