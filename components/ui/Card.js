import { StyleSheet,View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8, //andriod only
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})
export default Card;