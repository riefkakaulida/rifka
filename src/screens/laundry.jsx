import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data =[
  {id: "1", namaIcon: 'truck', judulIcon:'pengiriman'},
  {id: "2", namaIcon: 'cash', judulIcon:'pembayaran'},
  

];

const LaundryApp = ({navigation}) => {
  return (
    <View style={{padding:20}}>
      <FlatList
      data={Data}
      horizontal={true}
      renderItem={({item}) => (
      <TouchableOpacity style={{width:50, marginRight:35}} key={item.id} >
        <View style={{width:50, height:50, backgroundColor:'gray', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
          <MaterialCommunityIcons name={item.namaIcon} color='PURPLE' size={30} onPress={() => {navigation.navigate('kirim')}} />
        </View>
        <Text style={{color:'black', textAlign:'center'}}>{item.judulIcon}</Text>
      </TouchableOpacity>

  )} />
    </View>
  )
}


export default LaundryApp

const styles = StyleSheet.create({})