import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AboutScreen() {
  const router = useRouter(); // Navigation

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Logo & Title */}
      <Image source={require("@/assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>About VetConnect 🐾</Text>

      {/* Description */}
      <Text style={styles.description}>
        VetConnect is a mobile app designed to help pet owners find veterinary services, grooming, and essential pet care.
        Our goal is to provide an easy and reliable way to connect pet owners with trusted professionals.
      </Text>

      {/* Developer Info */}
      <Text style={styles.subtitle}>Developed by:</Text>
      <Text style={styles.developer}>Your Name / Team Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E6B98A", alignItems: "center", justifyContent: "center", padding: 20 },
  backButton: { position: "absolute", top: 40, left: 20, backgroundColor: "#3276A6", padding: 10, borderRadius: 50 },
  logo: { width: 100, height: 100, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 10 },
  description: { fontSize: 16, textAlign: "center", color: "#444", marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: "bold", color: "#222", marginTop: 10 },
  developer: { fontSize: 16, color: "#555" },
});
