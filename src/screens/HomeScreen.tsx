import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const {width} = Dimensions.get('window');

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionTime, setConnectionTime] = useState('00:00:00');
  const [selectedServer, setSelectedServer] = useState('Netherlands');
  const [downloadSpeed, setDownloadSpeed] = useState('527 MB');
  const [uploadSpeed, setUploadSpeed] = useState('69 MB');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      let seconds = 0;
      interval = setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        setConnectionTime(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  const handleConnect = () => {
    if (isConnected) {
      setIsConnected(false);
      setConnectionTime('00:00:00');
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
      }, 2000);
    }
  };

  const getConnectionStatus = () => {
    if (isConnecting) return 'Connecting...';
    if (isConnected) return 'Connected';
    return 'Disconnected';
  };

  const getStatusColor = () => {
    if (isConnecting) return '#ffa726';
    if (isConnected) return '#4caf50';
    return '#f44336';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </View>
        <Text style={styles.headerTitle}>Pearl Vpn</Text>
        <TouchableOpacity style={styles.crownIcon}>
          <Text style={styles.crownText}>👑</Text>
        </TouchableOpacity>
      </View>

      {/* Connection Status */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Status</Text>
        <Text style={[styles.statusText, {color: getStatusColor()}]}>
          {getConnectionStatus()}
        </Text>
      </View>

      {/* Connection Time */}
      {isConnected && (
        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>Connecting Time</Text>
          <Text style={styles.timeText}>{connectionTime}</Text>
        </View>
      )}

      {/* Selected Server */}
      <TouchableOpacity
        style={styles.serverContainer}
        onPress={() => navigation.navigate('ServerList')}>
        <View style={styles.serverInfo}>
          <View style={styles.flagContainer}>
            <Text style={styles.flag}>🇳🇱</Text>
          </View>
          <View>
            <Text style={styles.serverName}>{selectedServer}</Text>
            <Text style={styles.serverLocation}>Amsterdam</Text>
          </View>
        </View>
        <Text style={styles.serverPing}>16%</Text>
      </TouchableOpacity>

      {/* Speed Stats */}
      {isConnected && (
        <View style={styles.speedContainer}>
          <View style={styles.speedItem}>
            <View style={styles.speedIcon}>
              <Text style={styles.speedArrow}>⬇️</Text>
            </View>
            <Text style={styles.speedLabel}>Download</Text>
            <Text style={styles.speedValue}>{downloadSpeed}</Text>
          </View>
          <View style={styles.speedItem}>
            <View style={styles.speedIcon}>
              <Text style={styles.speedArrow}>⬆️</Text>
            </View>
            <Text style={styles.speedLabel}>Upload</Text>
            <Text style={styles.speedValue}>{uploadSpeed}</Text>
          </View>
        </View>
      )}

      {/* Globe Illustration */}
      <View style={styles.globeContainer}>
        <View style={styles.globe}>
          <View style={styles.globeInner}>
            <Text style={styles.globeText}>🌍</Text>
          </View>
          {isConnected && (
            <View style={styles.connectionRing}>
              <View style={styles.connectionDot} />
            </View>
          )}
        </View>
        {isConnected && (
          <View style={styles.locationInfo}>
            <Text style={styles.locationText}>Amsterdam</Text>
            <Text style={styles.ipText}>185.101.575</Text>
          </View>
        )}
      </View>

      {/* Connect Button */}
      <TouchableOpacity
        style={[
          styles.connectButton,
          isConnected && styles.disconnectButton,
          isConnecting && styles.connectingButton,
        ]}
        onPress={handleConnect}
        disabled={isConnecting}>
        <Text style={styles.connectButtonText}>
          {isConnecting ? 'Cancel Connection' : isConnected ? 'Disconnect' : 'Connect'}
        </Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Countries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ServerList')}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabel}>Connected</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navLabel}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerLeft: {
    width: 40,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 4,
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  crownIcon: {
    width: 40,
    alignItems: 'flex-end',
  },
  crownText: {
    fontSize: 20,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  statusLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timeLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  serverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2a3e',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  serverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    marginRight: 12,
  },
  flag: {
    fontSize: 24,
  },
  serverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  serverLocation: {
    fontSize: 14,
    color: '#8e8e93',
  },
  serverPing: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: '600',
  },
  speedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  speedItem: {
    alignItems: 'center',
    backgroundColor: '#2a2a3e',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 100,
  },
  speedIcon: {
    marginBottom: 4,
  },
  speedArrow: {
    fontSize: 16,
  },
  speedLabel: {
    fontSize: 12,
    color: '#8e8e93',
    marginBottom: 4,
  },
  speedValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  globeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  globe: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  globeInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4facfe',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4facfe',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  globeText: {
    fontSize: 48,
  },
  connectionRing: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#4caf50',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  connectionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4caf50',
    marginTop: -4,
  },
  locationInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  ipText: {
    fontSize: 14,
    color: '#8e8e93',
  },
  connectButton: {
    backgroundColor: '#f44336',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#f44336',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  disconnectButton: {
    backgroundColor: '#4caf50',
    shadowColor: '#4caf50',
  },
  connectingButton: {
    backgroundColor: '#ffa726',
    shadowColor: '#ffa726',
  },
  connectButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#2a2a3e',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#8e8e93',
  },
  activeNavLabel: {
    color: '#4facfe',
  },
});

export default HomeScreen;

