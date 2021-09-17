import { isTSEnumMember } from '@babel/types';
import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const DATA = [
  {
    id: "12",
    title: "1"
  },
  {
    id: "13",
    title: "2"
  },
  {
    id: "14",
    title: "2"
  },
  {
    id: "15",
    title: "2"
  }
]

const CatRow = ({ title, onPressed, backgroundColor, textColor }) => {
  const [isHungry, setIsHungry] = React.useState(true);
  return (
    <View>
      <TouchableOpacity
        onPress={onPressed}>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
      <Text style={[styles.title, textColor, backgroundColor]}>Hello, I am {title} {!isHungry ? "hungry" : "full"}</Text>
    </View>
  );
}

const Cafe = () => {
  const [selectedId, setSelectedId] = React.useState(null)

  const renderRow = ({ item }) => {
    const bgColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const tColor = item.id === selectedId ? 'white' : 'black';

    return (
      <CatRow
        title={item.title}
        onPressed={() => setSelectedId(item.id) }
        backgroundColor={{backgroundColor: bgColor}}
        textColor={{color: tColor}} />
    );
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderRow}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
}
export default Cafe;

// export default function TabThreeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab Three</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
