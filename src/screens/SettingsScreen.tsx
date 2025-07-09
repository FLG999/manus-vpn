import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  StatusBar,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface Props {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = ({navigation}) => {
  const [killSwitch, setKillSwitch] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoConnect, setAutoConnect] = useState(false);

  const settingsItems = [
    {
      title: 'Kill Switch',
      subtitle: 'Block internet if VPN disconnects',
      type: 'switch',
      value: killSwitch,
      onToggle: setKillSwitch,
    },
    {
      title: 'Auto Connect',
      subtitle: 'Connect automatically on app start',
      type: 'switch',
      value: autoConnect,
      onToggle: setAutoConnect,
    },
    {
      title: 'Notifications',
      subtitle: 'Receive connection status updates',
      type: 'switch',
      value: notifications,
      onToggle: setNotifications,
    },
    {
      title: 'Protocol',
      subtitle: 'OpenVPN',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'Split Tunneling',
      subtitle: 'Choose apps to bypass VPN',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'DNS Settings',
      subtitle: 'Custom DNS configuration',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'Privacy Policy',
      subtitle: 'Read our privacy policy',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'Terms of Service',
      subtitle: 'Read our terms of service',
      type: 'navigation',
      onPress: () => {},
    },
    {
      title: 'About',
      subtitle: 'App version and information',
      type: 'navigation',
      onPress: () => {},
    },
  ];

  const renderSettingItem = (item: any, index: number) => (
    <TouchableOpacity
      key={index}
      style={styles.settingItem}
      onPress={item.onPress}
      disabled={item.type === 'switch'}>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{item.title}</Text>
        <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
      </View>
      {item.type === 'switch' ? (
        <Switch
          value={item.value}
          onValueChange={item.onToggle}
          trackColor={{false: '#3a3a54', true: '#4facfe'}}
          thumbColor={item.value ? '#ffffff' : '#8e8e93'}
        />
      ) : (
        <Text style={styles.chevron}>›</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>U</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>User Name</Text>
              <Text style={styles.profileEmail}>user@example.com</Text>
            </View>
            <TouchableOpacity
              style={styles.upgradeButton}
              onPress={() => navigation.navigate('Premium')}>
              <Text style={styles.upgradeText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings List */}
        <View style={styles.settingsContainer}>
          {settingsItems.map(renderSettingItem)}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Pearl VPN v1.0.0</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Countries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ServerList')}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabel}>Connected</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={[styles.navLabel, styles.activeNavLabel]}>Setting</Text>
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
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  headerRight: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a3e',
    padding: 16,
    borderRadius: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4facfe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: '#8e8e93',
  },
  upgradeButton: {
    backgroundColor: '#4facfe',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  upgradeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  settingsContainer: {
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2a3e',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#8e8e93',
  },
  chevron: {
    fontSize: 20,
    color: '#8e8e93',
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  versionContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  versionText: {
    fontSize: 14,
    color: '#8e8e93',
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

export default SettingsScreen;

