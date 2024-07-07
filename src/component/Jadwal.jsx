import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: 'green', fontWeight: 'bold'}}>
          Jadwal Pemeriksaan
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            elevation: 10,
            marginTop: 10,
          }}>
        </View>
      </View>
    </View>
  );
};

export default Jadwal;
