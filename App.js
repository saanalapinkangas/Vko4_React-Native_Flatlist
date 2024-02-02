import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { DATA } from './Data';
import Row from './Row';
import Search from './components/Search';

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(DATA)
  }, [])

const renderItem = ({ item }) => (
  <Text>{item.lastname}</Text>
)

const executeSearch = (search) => {
  const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
  setItems(searchArray)
}

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        style= {styles.list}
        renderItem={({item}) => (
          <Row person={item} />
        )}>

        </FlatList>
        </SafeAreaView>
  );
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  list: {
    width: '100%',
  }
});
