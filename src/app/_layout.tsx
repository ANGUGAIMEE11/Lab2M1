import { View, Text, Image, StyleSheet } from 'react-native';

// Changed the profile screen to make it more appealing. 5/20/2026
export default function Index() {
  return (
    <View style={styles.screen}>
      <Image 
        source={require('../../assets/images/profile.jpg')}
        style={styles.photo} 
      />
      <Text style={styles.name}>Aimee Naomi A. Ang-ug</Text>
      <Text style={styles.bio}>MMA Student · CS126</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FBF5E6'
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    resizeMode: 'cover',
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  bio: { 
    fontSize: 14, 
    color: '#888' 
  },
});