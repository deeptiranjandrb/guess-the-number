import { TextInput, View,StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput}
         maxLength={2}
          autoCapitalize="none"
           keyboardType="number-pad"
           autoCorrect={false} />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal:24,
        marginTop:100,
        padding: 16,
        backgroundColor:'#72063c',
        borderRadius: 8,
        elevation: 8, //andriod only
        shadowColor:'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity:0.25
    },
    numberInput: {
        height: 50,
        width:65,
        textAlign:'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical:8,
        fontWeight:'bold'

    }
})
export default StartGameScreen