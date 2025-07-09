import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type PremiumScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Premium'
>;

interface Props {
  navigation: PremiumScreenNavigationProp;
}

const PremiumScreen: React.FC<Props> = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'monthly',
      title: 'Monthly',
      price: '$9.99',
      period: '/month',
      savings: null,
    },
    {
      id: 'yearly',
      title: 'Yearly',
      price: '$59.99',
      period: '/year',
      savings: 'Save 50%',
      popular: true,
    },
    {
      id: 'lifetime',
      title: 'Lifetime',
      price: '$199.99',
      period: 'one-time',
      savings: 'Best Value',
    },
  ];

  const features = [
    'Access to all premium servers',
    'Unlimited bandwidth',
    'No ads',
    'Priority customer support',
    'Advanced security features',
    'Multiple device connections',
    'Kill switch protection',
    'Split tunneling',
  ];

  const handleUpgrade = () => {
    // Handle upgrade logic here
    console.log('Upgrading to:', selectedPlan);
  };

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
        <Text style={styles.headerTitle}>Premium</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.crownContainer}>
            <Text style={styles.crownIcon}>👑</Text>
          </View>
          <Text style={styles.heroTitle}>Upgrade to Premium</Text>
          <Text style={styles.heroSubtitle}>
            Unlock all features and enjoy unlimited access to premium servers worldwide
          </Text>
        </View>

        {/* Features List */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>Premium Features</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.featureIcon}>✓</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Pricing Plans */}
        <View style={styles.plansSection}>
          <Text style={styles.plansTitle}>Choose Your Plan</Text>
          {plans.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              style={[
                styles.planItem,
                selectedPlan === plan.id && styles.selectedPlan,
                plan.popular && styles.popularPlan,
              ]}
              onPress={() => setSelectedPlan(plan.id)}>
              {plan.popular && (
                <View style={styles.popularBadge}>
                  <Text style={styles.popularText}>Most Popular</Text>
                </View>
              )}
              <View style={styles.planHeader}>
                <View style={styles.planInfo}>
                  <Text style={styles.planTitle}>{plan.title}</Text>
                  {plan.savings && (
                    <Text style={styles.planSavings}>{plan.savings}</Text>
                  )}
                </View>
                <View style={styles.planPricing}>
                  <Text style={styles.planPrice}>{plan.price}</Text>
                  <Text style={styles.planPeriod}>{plan.period}</Text>
                </View>
              </View>
              <View style={styles.radioContainer}>
                <View style={[
                  styles.radioButton,
                  selectedPlan === plan.id && styles.radioSelected
                ]}>
                  {selectedPlan === plan.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upgrade Button */}
        <TouchableOpacity style={styles.upgradeButton} onPress={handleUpgrade}>
          <Text style={styles.upgradeButtonText}>
            Upgrade Now - {plans.find(p => p.id === selectedPlan)?.price}
          </Text>
        </TouchableOpacity>

        {/* Terms */}
        <View style={styles.termsSection}>
          <Text style={styles.termsText}>
            By subscribing, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
          <Text style={styles.termsText}>
            Subscription automatically renews unless cancelled 24 hours before renewal
          </Text>
        </View>
      </ScrollView>
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
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  crownContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4facfe',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#4facfe',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  crownIcon: {
    fontSize: 40,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 24,
  },
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 16,
    color: '#4caf50',
    marginRight: 12,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 16,
    color: '#ffffff',
    flex: 1,
  },
  plansSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  plansTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  planItem: {
    backgroundColor: '#2a2a3e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative',
  },
  selectedPlan: {
    borderColor: '#4facfe',
  },
  popularPlan: {
    borderColor: '#ffa726',
  },
  popularBadge: {
    position: 'absolute',
    top: -8,
    left: 16,
    backgroundColor: '#ffa726',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  planSavings: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: '600',
  },
  planPricing: {
    alignItems: 'flex-end',
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  planPeriod: {
    fontSize: 14,
    color: '#8e8e93',
  },
  radioContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8e8e93',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#4facfe',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4facfe',
  },
  upgradeButton: {
    backgroundColor: '#4facfe',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#4facfe',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  upgradeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsSection: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  termsText: {
    fontSize: 12,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 8,
  },
  termsLink: {
    color: '#4facfe',
    textDecorationLine: 'underline',
  },
});

export default PremiumScreen;

