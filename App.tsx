import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { Dashboard } from './src/screens/DashboardScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Dashboard />
      </View>
    </NativeBaseProvider>
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
