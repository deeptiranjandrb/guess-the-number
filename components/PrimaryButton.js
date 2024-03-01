import { View,Text, StyleSheet } from "react-native"

const PrimaryButton = ({children}) => {
  return (
    <View>
        <Text>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        
        padding: 16,
    }
})
export default PrimaryButton