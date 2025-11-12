import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef } from "react";
import { Animated, Pressable } from "react-native";

export default function BackButton() {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
            Animated.sequence([
            Animated.spring(scale, { toValue: 0.8, useNativeDriver: true }),
            Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
        ]).start(() => router.dismiss());
    };

    return (
        <Animated.View style={{ transform: [{ scale }] }}>
            <Pressable onPress={handlePress}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </Pressable>
        </Animated.View>
    );
}
