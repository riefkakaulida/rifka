import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={'green'} />
      <Text style={{color: '#212121'}}>Hello</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#212121'}}>
        haloooo Nisa'
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={props.pencarian}
          onChangeText={text => props.setPencarian(text)}
          placeholder="Cari harga promo"
          style={{
            backgroundColor: 'green',
            elevation: 3,
            marginTop: 20,
            paddingLeft: 10,
            borderRadius: 5,
            flex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            marginTop: 20,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginLeft: 10,
            elevation: 3,
          }}>
          <Icon name="search" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
