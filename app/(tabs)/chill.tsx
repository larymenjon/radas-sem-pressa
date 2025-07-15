import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Waves, Mountain, Sun, Moon, Coffee, TreePalm as Palmtree, Flower2 } from 'lucide-react-native';

export default function ChillScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: 'stressed', icon: Waves, label: 'Estressado', color: '#3B82F6' },
    { id: 'tired', icon: Moon, label: 'Cansado', color: '#6366F1' },
    { id: 'excited', icon: Sun, label: 'Animado', color: '#F59E0B' },
    { id: 'romantic', icon: Heart, label: 'Romântico', color: '#EC4899' },
    { id: 'adventurous', icon: Mountain, label: 'Aventureiro', color: '#10B981' },
    { id: 'peaceful', icon: Flower2, label: 'Zen', color: '#8B5CF6' },
  ];

  const moodSuggestions = {
    stressed: {
      title: 'Relaxe e Respire',
      subtitle: 'Destinos perfeitos para aliviar o estresse',
      destinations: [
        { name: 'Campos do Jordão', description: 'Montanhas e ar puro', price: 320 },
        { name: 'Arraial d\'Ajuda', description: 'Praias tranquilas', price: 450 },
        { name: 'Tiradentes', description: 'História e serenidade', price: 280 },
      ],
    },
    tired: {
      title: 'Descanse e Recarregue',
      subtitle: 'Lugares para relaxar completamente',
      destinations: [
        { name: 'Caldas Novas', description: 'Águas termais relaxantes', price: 380 },
        { name: 'Gramado', description: 'Charme e tranquilidade', price: 420 },
        { name: 'Petrópolis', description: 'Clima ameno e descanso', price: 250 },
      ],
    },
    excited: {
      title: 'Viva a Aventura',
      subtitle: 'Destinos cheios de energia',
      destinations: [
        { name: 'Rio de Janeiro', description: 'Cidade maravilhosa', price: 380 },
        { name: 'Salvador', description: 'Cultura e festa', price: 490 },
        { name: 'Florianópolis', description: 'Praias e vida noturna', price: 420 },
      ],
    },
  };

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Modo Leveza" 
        subtitle="Encontre o destino perfeito para o seu estado de espírito"
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.moodSection}>
          <Text style={styles.sectionTitle}>Como você está se sentindo?</Text>
          <View style={styles.moodGrid}>
            {moods.map((mood) => (
              <TouchableOpacity
                key={mood.id}
                style={[
                  styles.moodCard,
                  selectedMood === mood.id && styles.selectedMoodCard
                ]}
                onPress={() => handleMoodSelect(mood.id)}
              >
                <LinearGradient
                  colors={[mood.color + '20', mood.color + '10']}
                  style={styles.moodGradient}
                >
                  <mood.icon size={32} color={mood.color} />
                  <Text style={[styles.moodLabel, { color: mood.color }]}>
                    {mood.label}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {selectedMood && moodSuggestions[selectedMood] && (
          <View style={styles.suggestionsSection}>
            <Card style={styles.suggestionHeader}>
              <Text style={styles.suggestionTitle}>
                {moodSuggestions[selectedMood].title}
              </Text>
              <Text style={styles.suggestionSubtitle}>
                {moodSuggestions[selectedMood].subtitle}
              </Text>
            </Card>

            {moodSuggestions[selectedMood].destinations.map((destination, index) => (
              <Card key={index} style={styles.destinationCard}>
                <View style={styles.destinationHeader}>
                  <View style={styles.destinationInfo}>
                    <Text style={styles.destinationName}>{destination.name}</Text>
                    <Text style={styles.destinationDescription}>
                      {destination.description}
                    </Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>a partir de</Text>
                    <Text style={styles.price}>R$ {destination.price}</Text>
                  </View>
                </View>
                <Button
                  title="Ver Opções"
                  onPress={() => console.log('View destination options')}
                  variant="secondary"
                  style={styles.destinationButton}
                />
              </Card>
            ))}
          </View>
        )}

        <Card style={styles.wellnessCard}>
          <LinearGradient
            colors={['#F0F9F4', '#E8F5E8']}
            style={styles.wellnessGradient}
          >
            <View style={styles.wellnessHeader}>
              <Coffee size={24} color="#10B981" />
              <Text style={styles.wellnessTitle}>Dica de Bem-Estar</Text>
            </View>
            <Text style={styles.wellnessText}>
              Viajar não é apenas sobre o destino, mas sobre como você se sente durante 
              a jornada. Respire fundo, relaxe e deixe que encontremos o lugar perfeito 
              para você.
            </Text>
          </LinearGradient>
        </Card>

        <Card style={styles.breathingCard}>
          <View style={styles.breathingHeader}>
            <Waves size={24} color="#3B82F6" />
            <Text style={styles.breathingTitle}>Exercício de Respiração</Text>
          </View>
          <Text style={styles.breathingText}>
            Enquanto procuramos suas opções, que tal um momento de relaxamento?
          </Text>
          <Button
            title="Iniciar Respiração Guiada"
            onPress={() => console.log('Start breathing exercise')}
            variant="ghost"
            style={styles.breathingButton}
          />
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
  moodSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  moodCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  selectedMoodCard: {
    transform: [{ scale: 1.05 }],
  },
  moodGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  moodLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginTop: 8,
    textAlign: 'center',
  },
  suggestionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  suggestionHeader: {
    textAlign: 'center',
    marginBottom: 16,
  },
  suggestionTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  suggestionSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  destinationCard: {
    marginBottom: 16,
  },
  destinationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  destinationInfo: {
    flex: 1,
  },
  destinationName: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  destinationDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  priceContainer: {
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
  destinationButton: {
    marginTop: 8,
  },
  wellnessCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 0,
    overflow: 'hidden',
  },
  wellnessGradient: {
    padding: 20,
  },
  wellnessHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  wellnessTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  wellnessText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
  breathingCard: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  breathingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  breathingTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  breathingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  breathingButton: {
    marginTop: 8,
  },
});