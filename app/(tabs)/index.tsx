import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen() {
  const router = useRouter(); // Use router instead of navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>VetConnect 🐾</Text>

      {/* User Welcome Section */}
      <View style={styles.welcomeCard}>
        <Image source={require("@/assets/images/icon.png")} style={styles.userIcon} />
        <Text style={styles.welcomeText}>Welcome, User!</Text>
        <TextInput style={styles.input} placeholder="Enter Pet's Name..." placeholderTextColor="#555" />
      </View>

      {/* Services Section */}
      <Text style={styles.sectionTitle}>Services:</Text>

      {/* Grooming Service */}
      <TouchableOpacity style={styles.serviceCard} onPress={() => router.push({ pathname: "/ServicesScreen", params: { category: "Grooming" } })}>
        <Image source={require("@/assets/images/grooming.jpg")} style={styles.serviceImage} />
        <Text style={styles.serviceText}>GROOMING FOR PETS ✂️</Text>
        <Ionicons name="add-circle" size={30} color="#3276A6" style={styles.icon} />
      </TouchableOpacity>

      {/* Veterinary Care Service */}
      <TouchableOpacity style={styles.serviceCard} onPress={() => router.push({ pathname: "/ServicesScreen", params: { category: "Veterinary" } })}>
        <Image source={require("@/assets/images/vetcare.jpg")} style={styles.serviceImage} />
        <Text style={styles.serviceText}>VETERINARY CARE 🏥</Text>
        <Ionicons name="add-circle" size={30} color="#3276A6" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E6B98A", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#222" },
  welcomeCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 20, borderWidth: 2, borderColor: "#3276A6" },
  userIcon: { width: 50, height: 50, marginBottom: 5 },
  welcomeText: { fontSize: 18, fontWeight: "bold" },
  input: { width: "90%", backgroundColor: "#eee", padding: 8, borderRadius: 5, marginTop: 5 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#222" },
  serviceCard: { backgroundColor: "#fff", borderRadius: 10, overflow: "hidden", marginBottom: 15, borderWidth: 2, borderColor: "#333", position: "relative" },
  serviceImage: { width: "100%", height: 120 },
  serviceText: { fontSize: 18, fontWeight: "bold", textAlign: "center", padding: 10, color: "#000", backgroundColor: "rgba(255, 255, 255, 0.7)", position: "absolute", width: "100%", bottom: 40 },
  icon: { position: "absolute", bottom: 10, right: 10 },
});
