import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Ionicons name="person-outline" size={24} color="blue" />
        <Text>person</Text>
      </View>
      <View style={styles.container2}>
        <Ionicons name="map-outline" size={24} color="blue" />
        <Text>map</Text>
      </View>
      <View style={styles.container3}>
        <Ionicons name="heart-outline" size={24} color="blue" />
        <Text>heart</Text>
      </View>
      <View style={styles.container4}>
        <Ionicons name="globe-outline" size={24} color="blue" />
        <Text>globe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container1: {
    flex: 1,
    backgroundColor: '#F00',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50%',
    minWidth: '50%',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f90',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50%',
    minWidth: '50%',
  },
  container3: {
    flex: 1,
    backgroundColor: '#0F0',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50%',
    minWidth: '50%',
  },
  container4: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50%',
    minWidth: '50%',
  },
});
