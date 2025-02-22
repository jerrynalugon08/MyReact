import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ServicesSection() {
  const router = useRouter(); // Correct navigation usage

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Services:</Text>

      {/* Grooming Service */}
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={() => router.push({ pathname: "/ServicesScreen", params: { category: "Grooming" } })}
      >
        <Image source={require("@/assets/images/grooming.jpg")} style={styles.serviceImage} />
        <View style={styles.overlay} />
        <Text style={styles.serviceText}>GROOMING FOR PETS ✂️</Text>
        <Ionicons name="add-circle" size={30} color="#fff" style={styles.icon} />
      </TouchableOpacity>

      {/* Veterinary Care Service */}
      <TouchableOpacity
        style={styles.serviceCard}
        onPress={() => router.push({ pathname: "/ServicesScreen", params: { category: "Veterinary" } })}
      >
        <Image source={require("@/assets/images/grooming.jpg")} style={styles.serviceImage} />
        <View style={styles.overlay} />
        <Text style={styles.serviceText}>VETERINARY CARE 🏥</Text>
        <Ionicons name="add-circle" size={30} color="#fff" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#222" },
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#ddd",
    position: "relative",
  },
  serviceImage: { width: "100%", height: 140 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  serviceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  icon: { position: "absolute", bottom: 10, right: 10 },
});
