import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Yobanté🚀</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: 'midnignt',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); a
