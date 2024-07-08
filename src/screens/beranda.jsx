import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import Header from '../component/Header';
import Jadwal from '../component/Jadwal';

const App = () => {
  const [pencarian, setPencarian] = useState('');
  const [kategori, setKategori] = useState([
    {namaKategori: 'Semua'},
    {namaKategori: 'Makanan'},
    {namaKategori: 'Minuman'},
    {namaKategori: 'Sayuran'},
    {namaKategori: 'Nasi'},
    {namaKategori: 'Hotplate'},
  ]);

  const [artikel, setArtikel] = useState([
    {
      judul: 'Ikan bakar sambal matah',
      harga: 'Rp20.000',
      image: require('../screens/img/ikan-bakar.jpeg'),
    },
    {
      judul: 'Ikan bakar saus madu',
      harga: 'Rp20.000',
      image: require('../screens/img/ikan-bakar-madu.jpg'),
    },
    {
      judul: 'Ayam penyet',
      harga: 'Rp20.000',
      image: require('../screens/img/ayam-penyet.jpeg'),
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Header pencarian={pencarian} setPencarian={setPencarian} />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{color: 'green', fontWeight: 'bold'}}>Kategori</Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
            <Text style={{color: 'green', fontWeight: 'bold'}}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  marginRight: 10,
                  paddingHorizontal: 10,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <Text>{item.namaKategori}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <FlatList
            data={artikel}
            style={{marginBottom: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  backgroundColor: 'green',
                  borderRadius: 10,
                  elevation: 3,
                  marginBottom: 10,
                  marginTop: 10,
                  paddingBottom: 20,
                }}>
                <View
                  style={{
                    height: 200,
                    width: 300,
                    marginBottom: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      flex: 1,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                    imageStyle={{
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={item.image}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      borderColor: '#FFFFFF',
                      borderWidth: 2,
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      marginHorizontal: 10,
                      marginTop: 5,
                    }}>
                    {item.judul}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 10,
                    }}>
                    {item.harga}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

    </View>
  );
};

export default App;
