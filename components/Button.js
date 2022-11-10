import { Pressable, StyleSheet, Text } from "react-native"
import { APP_COLORS } from "../lib/colors"

const Button = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>
                {children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: APP_COLORS.primary,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white'
    }
})

export default Button