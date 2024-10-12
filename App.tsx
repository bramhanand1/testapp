import { SafeAreaView, StyleSheet } from 'react-native';
import App1 from './component/App';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <App1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the SafeAreaView takes full screen
  },
});

export default App;
