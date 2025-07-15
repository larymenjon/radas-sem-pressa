import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  User, 
  Settings, 
  Bell, 
  CreditCard, 
  Award, 
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Gift,
  Shield
} from 'lucide-react-native';

export default function ProfileScreen() {
  const userStats = {
    totalSavings: 2840,
    tripsBooked: 7,
    alertsActive: 3,
    joinDate: 'Janeiro 2024',
  };

  const achievements = [
    { id: 1, title: 'Explorador', description: 'Primeira viagem reservada', icon: MapPin, unlocked: true },
    { id: 2, title: 'Econômico', description: 'Economizou R$ 1000+', icon: DollarSign, unlocked: true },
    { id: 3, title: 'Aventureiro', description: '5 viagens completas', icon: Star, unlocked: true },
    { id: 4, title: 'Mestre do Alerta', description: '10 alertas criados', icon: Bell, unlocked: false },
  ];

  const quickActions = [
    { id: 1, title: 'Configurações', icon: Settings, route: '/settings' },
    { id: 2, title: 'Notificações', icon: Bell, route: '/notifications' },
    { id: 3, title: 'Pagamentos', icon: CreditCard, route: '/payments' },
    { id: 4, title: 'Suporte', icon: Shield, route: '/support' },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Meu Perfil" 
        subtitle="Acompanhe suas conquistas e economias"
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Card style={styles.profileCard}>
          <LinearGradient
            colors={['#EDE9FE', '#F3E8FF']}
            style={styles.profileGradient}
          >
            <View style={styles.profileHeader}>
              <View style={styles.avatar}>
                <User size={32} color="#8B5CF6" />
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.userName}>Viajante Experiente</Text>
                <Text style={styles.userEmail}>usuario@exemplo.com</Text>
                <Text style={styles.memberSince}>Membro desde {userStats.joinDate}</Text>
              </View>
            </View>
          </LinearGradient>
        </Card>

        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Suas Conquistas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <DollarSign size={24} color="#10B981" />
              <Text style={styles.statValue}>R$ {userStats.totalSavings}</Text>
              <Text style={styles.statLabel}>Economizado</Text>
            </View>
            <View style={styles.statCard}>
              <MapPin size={24} color="#3B82F6" />
              <Text style={styles.statValue}>{userStats.tripsBooked}</Text>
              <Text style={styles.statLabel}>Viagens</Text>
            </View>
            <View style={styles.statCard}>
              <Bell size={24} color="#F59E0B" />
              <Text style={styles.statValue}>{userStats.alertsActive}</Text>
              <Text style={styles.statLabel}>Alertas Ativos</Text>
            </View>
          </View>
        </View>

        <Card style={styles.savingsCard}>
          <LinearGradient
            colors={['#ECFDF5', '#F0FDF4']}
            style={styles.savingsGradient}
          >
            <View style={styles.savingsHeader}>
              <TrendingUp size={24} color="#10B981" />
              <Text style={styles.savingsTitle}>Economia Total</Text>
            </View>
            <Text style={styles.savingsAmount}>R$ {userStats.totalSavings}</Text>
            <Text style={styles.savingsDescription}>
              Com essa economia, você poderia:
            </Text>
            <View style={styles.savingsOptions}>
              <Text style={styles.savingsOption}>• 3 dias em Fernando de Noronha</Text>
              <Text style={styles.savingsOption}>• 1 semana em Buenos Aires</Text>
              <Text style={styles.savingsOption}>• 2 finais de semana em Gramado</Text>
            </View>
          </LinearGradient>
        </Card>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Conquistas</Text>
          <View style={styles.achievementsList}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementCard}>
                <View style={[
                  styles.achievementIcon,
                  { backgroundColor: achievement.unlocked ? '#10B981' : '#E5E7EB' }
                ]}>
                  <achievement.icon 
                    size={20} 
                    color={achievement.unlocked ? '#FFFFFF' : '#9CA3AF'} 
                  />
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={[
                    styles.achievementTitle,
                    { color: achievement.unlocked ? '#1F2937' : '#9CA3AF' }
                  ]}>
                    {achievement.title}
                  </Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                </View>
                {achievement.unlocked && (
                  <Award size={16} color="#10B981" />
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.actionGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.actionCard}>
                <action.icon size={24} color="#6B7280" />
                <Text style={styles.actionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Card style={styles.premiumCard}>
          <LinearGradient
            colors={['#FEF3C7', '#FDE68A']}
            style={styles.premiumGradient}
          >
            <View style={styles.premiumHeader}>
              <Gift size={24} color="#D97706" />
              <Text style={styles.premiumTitle}>Radar Premium</Text>
            </View>
            <Text style={styles.premiumDescription}>
              Desbloqueie recursos avançados como alertas ilimitados, 
              previsões de preços e acesso prioritário a ofertas.
            </Text>
            <Button
              title="Conhecer Premium"
              onPress={() => console.log('View premium')}
              variant="primary"
              style={styles.premiumButton}
            />
          </LinearGradient>
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
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  profileGradient: {
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 2,
  },
  memberSince: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#8B5CF6',
  },
  statsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
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
    fontSize: 18,
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
  savingsCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  savingsGradient: {
    padding: 20,
  },
  savingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  savingsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  savingsAmount: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#10B981',
    marginBottom: 12,
  },
  savingsDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 12,
  },
  savingsOptions: {
    gap: 4,
  },
  savingsOption: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#374151',
  },
  achievementsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  achievementsList: {
    gap: 12,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 2,
  },
  achievementDescription: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  quickActionsSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
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
  actionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#374151',
    marginTop: 8,
  },
  premiumCard: {
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 0,
    overflow: 'hidden',
  },
  premiumGradient: {
    padding: 20,
  },
  premiumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  premiumTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginLeft: 12,
  },
  premiumDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  premiumButton: {
    marginTop: 8,
  },
});