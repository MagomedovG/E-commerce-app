import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import products from '../assets/products.json'
import ProductItemList from '../components/ProductItemList';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItemList product={item}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
