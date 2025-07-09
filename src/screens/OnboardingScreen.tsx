import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const {width, height} = Dimensions.get('window');

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Solar System Illustration */}
      <View style={styles.illustrationContainer}>
        <View style={styles.solarSystem}>
          {/* Sun */}
          <View style={styles.sun} />
          
          {/* Orbit 1 */}
          <View style={styles.orbit1}>
            <View style={styles.planet1} />
          </View>
          
          {/* Orbit 2 */}
          <View style={styles.orbit2}>
            <View style={styles.planet2} />
          </View>
          
          {/* Orbit 3 */}
          <View style={styles.orbit3}>
            <View style={styles.planet3} />
          </View>
          
          {/* Earth with ring */}
          <View style={styles.earthContainer}>
            <View style={styles.earth} />
            <View style={styles.earthRing} />
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Secure Browsing{'\n'}With No Limits</Text>
        <Text style={styles.description}>
          With Our Encrypted VPN Tunnel, Your{'\n'}
          Data Stay Safe, Even Over Public Or{'\n'}
          Untrusted Internet Connections.
        </Text>
        
        {/* Page Indicator */}
        <View style={styles.pageIndicator}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createAccountText}>Create An Account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  solarSystem: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  sun: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffd700',
    position: 'absolute',
    shadowColor: '#ffd700',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  orbit1: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#4facfe20',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  planet1: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff6b6b',
    marginTop: -6,
  },
  orbit2: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: '#4facfe20',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  planet2: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffa726',
    marginBottom: -8,
  },
  orbit3: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#4facfe20',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  planet3: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ab47bc',
    marginLeft: -7,
  },
  earthContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  earth: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4caf50',
  },
  earthRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#4facfe',
    position: 'absolute',
    top: -10,
    left: -10,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3a3a54',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4facfe',
    width: 24,
    borderRadius: 4,
  },
  buttonContainer: {
    paddingBottom: 40,
  },
  createAccountButton: {
    backgroundColor: '#4facfe',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#4facfe',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  createAccountText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  signInButton: {
    paddingVertical: 16,
  },
  signInText: {
    color: '#4facfe',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OnboardingScreen;

