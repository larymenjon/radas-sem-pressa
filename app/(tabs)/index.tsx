import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SearchBar } from '@/components/SearchBar';
import { FlightCard } from '@/components/FlightCard';
import { TrendingUp, DollarSign, Star, Clock } from 'lucide-react-native';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('deals');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const sampleFlights = [
    {
      id: 1,
      origin: 'SÃO PAULO',
      destination: 'SALVADOR',
      departureDate: '15 Mar',
      returnDate: '17 Mar',
      price: 487,
      previousPrice: 620,
      duration: '2h 15m',
      airline: 'Gol',
      stops: 0,
    },
    {
      id: 2,
      origin: 'RIO DE JANEIRO',
      destination: 'FORTALEZA',
      departureDate: '22 Mar',
      returnDate: '25 Mar',
      price: 521,
      previousPrice: 680,
      duration: '3h 10m',
      airline: 'Azul',
      stops: 0,
    },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Olá, viajante!" 
        subtitle="Encontre voos incríveis sem pressa, no seu tempo"
      />
      
      <SearchBar onSearch={handleSearch} />

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'deals' && styles.activeTab]}
          onPress={() => setActiveTab('deals')}
        >
          <Text style={[styles.tabText, activeTab === 'deals' && styles.activeTabText]}>
            Ofertas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'trending' && styles.activeTab]}
          onPress={() => setActiveTab('trending')}
        >
          <Text style={[styles.tabText, activeTab === 'trending' && styles.activeTabText]}>
            Tendências
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {activeTab === 'deals' && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Melhores Ofertas</Text>
              <Text style={styles.sectionSubtitle}>Voos com os melhores preços</Text>
            </View>
            
            {sampleFlights.map((flight) => (
              <FlightCard
                key={flight.id}
                origin={flight.origin}
                destination={flight.destination}
                departureDate={flight.departureDate}
                returnDate={flight.returnDate}
                price={flight.price}
                previousPrice={flight.previousPrice}
                duration={flight.duration}
                airline={flight.airline}
                stops={flight.stops}
                onViewDetails={() => console.log('View flight details')}
              />
            ))}
          </View>
        )}

        {activeTab === 'trending' && (
          <View style={styles.section}>
            <Card style={styles.trendingCard}>
              <View style={styles.trendingHeader}>
                <TrendingUp size={24} color="#3B82F6" />
                <Text style={styles.trendingTitle}>Destinos em Alta</Text>
              </View>
              <Text style={styles.trendingText}>
                Salvador está 15% mais barato esta semana
              </Text>
            </Card>
            
            <Card style={styles.trendingCard}>
              <View style={styles.trendingHeader}>
                <Star size={24} color="#F59E0B" />
                <Text style={styles.trendingTitle}>Recomendado</Text>
              </View>
              <Text style={styles.trendingText}>
                Feriado prolongado em abril - reserve agora!
              </Text>
            </Card>
          </View>
        )}

        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Suas Estatísticas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <DollarSign size={20} color="#10B981" />
              <Text style={styles.statValue}>R$ 1.240</Text>
              <Text style={styles.statLabel}>Economizou</Text>
            </View>
            <View style={styles.statItem}>
              <Clock size={20} color="#3B82F6" />
              <Text style={styles.statValue}>4</Text>
              <Text style={styles.statLabel}>Viagens</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#3B82F6',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  trendingCard: {
    marginHorizontal: 20,
  },
  trendingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  trendingTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  trendingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
  statsSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  statsTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 4,
  },
});