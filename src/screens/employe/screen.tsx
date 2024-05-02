import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../utils/colors';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setEmploye } from '../../store/employeSlice/slice';

const EmployeScreen = () => {
  const authData: any = useSelector(state => state);
  const dispatch = useDispatch();

  const renderItem = ({ item }: any) => {
    console.log('item', item);
    return (
      <View style={styles.list}>
        <View style={styles.rc}>
          <Text>{item?.fname}</Text>
          <Text>{item?.lname}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>{item?.age}</Text>
          <View style={styles.rc}>
            <Text>{item?.cityName}</Text>
            <Text>{item?.address}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={authData?.employee?.data}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: colors.primary,
  },
  btn: {
    marginTop: 40,
  },
  contianerView: {
    marginTop: 28,
  },
  list: {
    backgroundColor: '#d8f5a2',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginTop: 12,
    borderRadius: 4,
  },
  rc: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
});

export default EmployeScreen;
