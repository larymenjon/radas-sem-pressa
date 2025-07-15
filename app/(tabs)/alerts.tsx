import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bell, Plus, MapPin, Calendar, DollarSign, Settings } from 'lucide-react-native';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      origin: 'São Paulo',
      destination: 'Salvador',
      departureDate: 'Sexta à noite',
      returnDate: 'Domingo à noite',
      maxPrice: 600,
      isActive: true,
      currentPrice: 487,
      lastTriggered: '2 dias atrás',
    },
    {
      id: 2,
      origin: 'Rio de Janeiro',
      destination: 'Fortaleza',
      departureDate: 'Qualquer dia',
      returnDate: 'Fim de semana',
      maxPrice: 500,
      isActive: false,
      currentPrice: 521,
      lastTriggered: 'Nunca',
    },
  ]);

  const toggleAlert = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Alertas Inteligentes" 
        subtitle="Receba notificações quando encontrarmos o preço ideal"
      />
      
      <View style={styles.content}>
        <Button 
          title="Criar Novo Alerta" 
          onPress={() => console.log('Create new alert')}
          style={styles.createButton}
        />

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.alertsSection}>
            <Text style={styles.sectionTitle}>Seus Alertas</Text>
            
            {alerts.map((alert) => (
              <Card key={alert.id} style={styles.alertCard}>
                <View style={styles.alertHeader}>
                  <View style={styles.routeInfo}>
                    <View style={styles.routeText}>
                      <Text style={styles.cityText}>{alert.origin}</Text>
                      <Text style={styles.arrow}>→</Text>
                      <Text style={styles.cityText}>{alert.destination}</Text>
                    </View>
                    <View style={styles.alertStatus}>
                      <View style={[
                        styles.statusDot, 
                        { backgroundColor: alert.isActive ? '#10B981' : '#EF4444' }
                      ]} />
                      <Text style={styles.statusText}>
                        {alert.isActive ? 'Ativo' : 'Pausado'}
                      </Text>
                    </View>
                  </View>
                  
                  <TouchableOpacity 
                    style={styles.toggleButton}
                    onPress={() => toggleAlert(alert.id)}
                  >
                    <Settings size={20} color="#6B7280" />
                  </TouchableOpacity>
                </View>

                <View style={styles.alertDetails}>
                  <View style={styles.detailRow}>
                    <Calendar size={16} color="#6B7280" />
                    <Text style={styles.detailText}>
                      {alert.departureDate} → {alert.returnDate}
                    </Text>
                  </View>
                  
                  <View style={styles.detailRow}>
                    <DollarSign size={16} color="#6B7280" />
                    <Text style={styles.detailText}>
                      Até R$ {alert.maxPrice}
                    </Text>
                  </View>
                </View>

                <View style={styles.priceInfo}>
                  <View style={styles.priceRow}>
                    <Text style={styles.priceLabel}>Preço atual:</Text>
                    <Text style={[
                      styles.currentPrice,
                      { color: alert.currentPrice <= alert.maxPrice ? '#10B981' : '#EF4444' }
                    ]}>
                      R$ {alert.currentPrice}
                    </Text>
                  </View>
                  
                  <Text style={styles.lastTriggered}>
                    Último alerta: {alert.lastTriggered}
                  </Text>
                </View>
              </Card>
            ))}
          </View>

          <Card style={styles.tipsCard}>
            <View style={styles.tipsHeader}>
              <Bell size={24} color="#3B82F6" />
              <Text style={styles.tipsTitle}>Dicas para Alertas</Text>
            </View>
            <View style={styles.tipsList}>
              <Text style={styles.tipItem}>• Seja específico com datas flexíveis</Text>
              <Text style={styles.tipItem}>• Defina preços realistas</Text>
              <Text style={styles.tipItem}>• Alertas muito específicos podem não disparar</Text>
              <Text style={styles.tipItem}>• Considere destinos alternativos</Text>
            </View>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flex: 1,
  },
  createButton: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  alertsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  alertCard: {
    marginHorizontal: 20,
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  routeInfo: {
    flex: 1,
  },
  routeText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cityText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
  },
  arrow: {
    fontSize: 16,
    color: '#6B7280',
    marginHorizontal: 12,
  },
  alertStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  toggleButton: {
    padding: 8,
  },
  alertDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 8,
  },
  priceInfo: {
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  currentPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  lastTriggered: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
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