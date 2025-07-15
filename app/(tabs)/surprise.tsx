import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Shuffle, 
  Clock,
  Star,
  Plane
} from 'lucide-react-native';

export default function SurpriseScreen() {
  const [budget, setBudget] = useState<number>(1000);
  const [isGenerating, setIsGenerating] = useState(false);
  const [surpriseTrips, setSurpriseTrips] = useState([
    {
      id: 1,
      destination: 'Ouro Preto, MG',
      duration: '3 dias',
      price: 680,
      departure: 'Amanhã',
      highlights: ['História', 'Arquitetura', 'Gastronomia'],
      description: 'Cidade histórica cheia de charme e mistério',
      image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      destination: 'Chapada Diamantina, BA',
      duration: '4 dias',
      price: 920,
      departure: 'Próxima semana',
      highlights: ['Cachoeiras', 'Trilhas', 'Natureza'],
      description: 'Aventura e contato com a natureza',
      image: 'https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ]);

  const budgetOptions = [500, 750, 1000, 1500, 2000];

  const generateSurprise = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // Here you would normally fetch new surprise trips
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Surpresa-me!" 
        subtitle="Descubra destinos incríveis que cabem no seu orçamento"
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Card style={styles.budgetCard}>
          <LinearGradient
            colors={['#FEF3C7', '#FDE68A']}
            style={styles.budgetGradient}
          >
            <View style={styles.budgetHeader}>
              <DollarSign size={24} color="#D97706" />
              <Text style={styles.budgetTitle}>Qual é o seu orçamento?</Text>
            </View>
            
            <View style={styles.budgetOptions}>
              {budgetOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.budgetOption,
                    budget === option && styles.selectedBudgetOption
                  ]}
                  onPress={() => setBudget(option)}
                >
                  <Text style={[
                    styles.budgetOptionText,
                    budget === option && styles.selectedBudgetOptionText
                  ]}>
                    R$ {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </LinearGradient>
        </Card>

        <View style={styles.actionSection}>
          <Button
            title={isGenerating ? "Gerando surpresas..." : "Gerar Surpresas"}
            onPress={generateSurprise}
            style={[styles.generateButton, isGenerating && styles.generatingButton]}
          />
          
          <TouchableOpacity style={styles.shuffleButton} onPress={generateSurprise}>
            <Shuffle size={20} color="#3B82F6" />
            <Text style={styles.shuffleText}>Embaralhar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.surprisesSection}>
          <Text style={styles.sectionTitle}>Suas Surpresas</Text>
          <Text style={styles.sectionSubtitle}>
            Baseado no seu orçamento de R$ {budget}
          </Text>
          
          {surpriseTrips.map((trip) => (
            <Card key={trip.id} style={styles.tripCard}>
              <LinearGradient
                colors={['#E0F2FE', '#F0F9FF']}
                style={styles.tripGradient}
              >
                <View style={styles.tripHeader}>
                  <View style={styles.tripInfo}>
                    <Text style={styles.tripDestination}>{trip.destination}</Text>
                    <Text style={styles.tripDescription}>{trip.description}</Text>
                  </View>
                  <View style={styles.tripPrice}>
                    <Text style={styles.priceLabel}>total</Text>
                    <Text style={styles.price}>R$ {trip.price}</Text>
                  </View>
                </View>

                <View style={styles.tripDetails}>
                  <View style={styles.detailItem}>
                    <Calendar size={16} color="#6B7280" />
                    <Text style={styles.detailText}>{trip.duration}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Clock size={16} color="#6B7280" />
                    <Text style={styles.detailText}>{trip.departure}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Plane size={16} color="#6B7280" />
                    <Text style={styles.detailText}>Voo incluído</Text>
                  </View>
                </View>

                <View style={styles.highlights}>
                  <Text style={styles.highlightsTitle}>Destaques:</Text>
                  <View style={styles.highlightsList}>
                    {trip.highlights.map((highlight, index) => (
                      <View key={index} style={styles.highlightItem}>
                        <Star size={12} color="#F59E0B" />
                        <Text style={styles.highlightText}>{highlight}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.tripActions}>
                  <Button
                    title="Quero Esta!"
                    onPress={() => console.log('Select trip')}
                    variant="primary"
                    style={styles.selectButton}
                  />
                  <Button
                    title="Ver Mais"
                    onPress={() => console.log('View more')}
                    variant="secondary"
                    style={styles.viewButton}
                  />
                </View>
              </LinearGradient>
            </Card>
          ))}
        </View>

        <Card style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Sparkles size={24} color="#8B5CF6" />
            <Text style={styles.tipsTitle}>Como Funciona</Text>
          </View>
          <View style={styles.tipsList}>
            <Text style={styles.tipItem}>• Algoritmo considera seu orçamento e preferências</Text>
            <Text style={styles.tipItem}>• Preços incluem voo, hospedagem e algumas refeições</Text>
            <Text style={styles.tipItem}>• Datas flexíveis para melhores preços</Text>
            <Text style={styles.tipItem}>• Opções renovadas a cada 6 horas</Text>
          </View>
        </Card>
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
  budgetCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 0,
    overflow: 'hidden',
  },
  budgetGradient: {
    padding: 20,
  },
  budgetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  budgetTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  budgetOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  budgetOption: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedBudgetOption: {
    borderColor: '#D97706',
    backgroundColor: '#FEF3C7',
  },
  budgetOptionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  selectedBudgetOptionText: {
    color: '#D97706',
  },
  actionSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  generateButton: {
    marginBottom: 12,
  },
  generatingButton: {
    opacity: 0.7,
  },
  shuffleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  shuffleText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#3B82F6',
    marginLeft: 8,
  },
  surprisesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 16,
  },
  tripCard: {
    marginBottom: 20,
    padding: 0,
    overflow: 'hidden',
  },
  tripGradient: {
    padding: 20,
  },
  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  tripInfo: {
    flex: 1,
  },
  tripDestination: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  tripDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  tripPrice: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  price: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#059669',
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  highlights: {
    marginBottom: 20,
  },
  highlightsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#374151',
    marginBottom: 8,
  },
  highlightsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  highlightText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  tripActions: {
    flexDirection: 'row',
    gap: 12,
  },
  selectButton: {
    flex: 1,
  },
  viewButton: {
    flex: 1,
  },
  tipsCard: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
});