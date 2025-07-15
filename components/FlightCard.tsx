import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Plane, Clock, DollarSign, TrendingDown } from 'lucide-react-native';

interface FlightCardProps {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  price: number;
  previousPrice?: number;
  duration: string;
  airline: string;
  stops: number;
  onViewDetails: () => void;
}

export function FlightCard({ 
  origin, 
  destination, 
  departureDate, 
  returnDate, 
  price, 
  previousPrice,
  duration, 
  airline, 
  stops,
  onViewDetails 
}: FlightCardProps) {
  const savings = previousPrice ? previousPrice - price : 0;
  const savingsPercentage = previousPrice ? ((savings / previousPrice) * 100).toFixed(0) : 0;

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.route}>
          <Text style={styles.city}>{origin}</Text>
          <Plane size={20} color="#6B7280" style={styles.planeIcon} />
          <Text style={styles.city}>{destination}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {price.toFixed(0)}</Text>
          {savings > 0 && (
            <View style={styles.savingsContainer}>
              <TrendingDown size={14} color="#10B981" />
              <Text style={styles.savings}>-{savingsPercentage}%</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Ida</Text>
          <Text style={styles.value}>{departureDate}</Text>
        </View>
        {returnDate && (
          <View style={styles.detailItem}>
            <Text style={styles.label}>Volta</Text>
            <Text style={styles.value}>{returnDate}</Text>
          </View>
        )}
      </View>

      <View style={styles.flightInfo}>
        <View style={styles.infoItem}>
          <Clock size={16} color="#6B7280" />
          <Text style={styles.infoText}>{duration}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{airline}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>
            {stops === 0 ? 'Direto' : `${stops} parada${stops > 1 ? 's' : ''}`}
          </Text>
        </View>
      </View>

      <Button 
        title="Ver Detalhes" 
        onPress={onViewDetails}
        variant="secondary"
        style={styles.button}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  city: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F2937',
  },
  planeIcon: {
    marginHorizontal: 12,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#059669',
  },
  savingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  savings: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#10B981',
    marginLeft: 4,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#374151',
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
  },
  button: {
    marginTop: 8,
  },
});