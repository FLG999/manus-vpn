import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type ServerListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ServerList'
>;

interface Props {
  navigation: ServerListScreenNavigationProp;
}

interface Server {
  id: string;
  name: string;
  flag: string;
  ping: string;
  isPremium?: boolean;
  isExpanded?: boolean;
  subServers?: {
    name: string;
    ping: string;
    signal: string;
  }[];
}

const ServerListScreen: React.FC<Props> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [servers, setServers] = useState<Server[]>([
    {
      id: '1',
      name: 'Italy',
      flag: '🇮🇹',
      ping: '16%',
      isExpanded: false,
      subServers: [
        {name: 'Italy#1', ping: '16%', signal: '🟢'},
        {name: 'Italy#2', ping: '23%', signal: '🟡'},
        {name: 'Italy#3', ping: '54%', signal: '🟠'},
        {name: 'Italy#4', ping: '81%', signal: '🔴'},
      ],
    },
    {
      id: '2',
      name: 'Netherlands',
      flag: '🇳🇱',
      ping: '16%',
    },
    {
      id: '3',
      name: 'Germany',
      flag: '🇩🇪',
      ping: '23%',
    },
    {
      id: '4',
      name: 'United States',
      flag: '🇺🇸',
      ping: '45%',
      isPremium: true,
    },
    {
      id: '5',
      name: 'Brazil',
      flag: '🇧🇷',
      ping: '67%',
      isPremium: true,
    },
    {
      id: '6',
      name: 'France',
      flag: '🇫🇷',
      ping: '34%',
      isPremium: true,
    },
    {
      id: '7',
      name: 'Canada',
      flag: '🇨🇦',
      ping: '56%',
      isPremium: true,
    },
  ]);

  const filteredServers = servers.filter(server =>
    server.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const freeServers = filteredServers.filter(server => !server.isPremium);
  const premiumServers = filteredServers.filter(server => server.isPremium);

  const toggleServerExpansion = (serverId: string) => {
    setServers(prevServers =>
      prevServers.map(server =>
        server.id === serverId
          ? {...server, isExpanded: !server.isExpanded}
          : server
      )
    );
  };

  const selectServer = (serverName: string) => {
    // Navigate back to home with selected server
    navigation.goBack();
  };

  const renderServer = (server: Server) => (
    <View key={server.id}>
      <TouchableOpacity
        style={styles.serverItem}
        onPress={() => {
          if (server.subServers) {
            toggleServerExpansion(server.id);
          } else {
            selectServer(server.name);
          }
        }}>
        <View style={styles.serverInfo}>
          <Text style={styles.serverFlag}>{server.flag}</Text>
          <View style={styles.serverDetails}>
            <Text style={styles.serverName}>{server.name}</Text>
            <Text style={styles.serverLocation}>
              {server.subServers ? `${server.subServers.length} Locations` : 'Amsterdam'}
            </Text>
          </View>
        </View>
        <View style={styles.serverRight}>
          {server.isPremium && (
            <Text style={styles.premiumIcon}>👑</Text>
          )}
          <Text style={styles.serverPing}>{server.ping}</Text>
          {server.subServers && (
            <Text style={styles.expandIcon}>
              {server.isExpanded ? '▲' : '▼'}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      
      {server.isExpanded && server.subServers && (
        <View style={styles.subServerContainer}>
          {server.subServers.map((subServer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.subServerItem}
              onPress={() => selectServer(subServer.name)}>
              <View style={styles.subServerInfo}>
                <Text style={styles.subServerSignal}>{subServer.signal}</Text>
                <Text style={styles.subServerName}>{subServer.name}</Text>
                <Text style={styles.subServerLocation}>Milano</Text>
              </View>
              <Text style={styles.subServerPing}>{subServer.ping}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

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
        <Text style={styles.headerTitle}>Countries</Text>
        <TouchableOpacity style={styles.crownIcon}>
          <Text style={styles.crownText}>👑</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search For Country Or City"
          placeholderTextColor="#8e8e93"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Free Locations */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Free Locations ({freeServers.length})</Text>
            <Text style={styles.sectionIcon}>ℹ️</Text>
          </View>
          {freeServers.map(renderServer)}
        </View>

        {/* Premium Locations */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Premium Locations ({premiumServers.length})</Text>
            <Text style={styles.sectionIcon}>ℹ️</Text>
          </View>
          {premiumServers.map(renderServer)}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.goBack()}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Countries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Disconnect</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4facfe',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#ffffff',
  },
  searchIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  sectionIcon: {
    fontSize: 16,
    color: '#8e8e93',
  },
  serverItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#2a2a3e',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 12,
  },
  serverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  serverFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  serverDetails: {
    flex: 1,
  },
  serverName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  serverLocation: {
    fontSize: 14,
    color: '#8e8e93',
  },
  serverRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  serverPing: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: '600',
    marginRight: 8,
  },
  expandIcon: {
    fontSize: 12,
    color: '#8e8e93',
  },
  subServerContainer: {
    marginHorizontal: 20,
    marginBottom: 8,
  },
  subServerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#1a1a2e',
    marginBottom: 4,
    borderRadius: 8,
  },
  subServerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subServerSignal: {
    fontSize: 12,
    marginRight: 12,
  },
  subServerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    marginRight: 8,
  },
  subServerLocation: {
    fontSize: 12,
    color: '#8e8e93',
  },
  subServerPing: {
    fontSize: 12,
    color: '#4caf50',
    fontWeight: '600',
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

export default ServerListScreen;

