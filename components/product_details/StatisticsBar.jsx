import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../customText';

const screenWidth = Dimensions.get('screen').width;
const BAR_HEIGHT = 6; // adjust height of each bar
const ROW_SPACING = 0; // vertical spacing between rows
const CONTAINER_TOP_MARGIN = 5; 

export default function StatisticsBar({
  excellentProgress = '0',
  goodProgress = '0',
  averageProgress = '0',
  belowAverageProgress = '0',
  poorProgress = '0',
}) {
  const rows = [
    { label: 'Excellent', value: excellentProgress },
    { label: 'Good', value: goodProgress },
    { label: 'Average', value: averageProgress },
    { label: 'Below average', value: belowAverageProgress },
    { label: 'Poor', value: poorProgress },
  ];

  return (
    <View style={styles.container}>
      {rows.map(({ label, value }, index) => {
        const pct = parseFloat(value) || 0;
        const remaining = Math.max(0, 100 - pct);
        return (
          <View key={label} style={[styles.row, index < rows.length - 1 && { marginBottom: ROW_SPACING }]}>  
            <CustomText style={styles.label}>{label}</CustomText>
            <View style={[styles.barBackground, { width: screenWidth * 0.6 }]}>                  
              <View style={[styles.barFill, { width: `${pct}%` }]} />
              <View style={[styles.barRemaining, { width: `${remaining}%` }]} />
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: CONTAINER_TOP_MARGIN,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    width: 90,
    marginRight: 10,
  },
  barBackground: {
    flexDirection: 'row',
    height: BAR_HEIGHT,
    backgroundColor: 'yellow',
    borderRadius: BAR_HEIGHT / 2,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#ab7e42',
  },
  barRemaining: {
    height: '100%',
    backgroundColor: 'rgba(247, 247, 247, 0.9)',
  },
  percent: {
    width: 30,
    textAlign: 'right',
    marginLeft: 10,
  },
});
