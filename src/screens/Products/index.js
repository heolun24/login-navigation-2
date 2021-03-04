import React, { PureComponent } from 'react';
import {
 Text,
 View, 
 StyleSheet,
 TouchableOpacity,
 FlatList,
 Image,
 Alert
 } from 'react-native';
import Data from '../../service/data.js'; 
import Header from '../../Header/index';

function giatien(price, sign = 'VND') {
	const pieces = parseFloat(price).toFixed(1).split('');
	let ii = pieces.length - 2;
	while ((ii -= 3) > 0) {
		pieces.splice(ii, 0, ',');
	}
	return sign + ' ' + pieces.join('');
}

function ItemList({Data}){
  return(
    <TouchableOpacity onPress={() => Alert.alert('Bạn có muốn mua')}>
    	<View style={styles.container}>
				<View style={styles.containerImage}>
					<Image
					  	style={styles.image}
					  	source={{
							uri: Data.thumbImage,
						}}
					></Image>
				</View>
				<View style={styles.content}>
					<Text style={styles.header} numberOfLines={2}>
						{Data.name}
					</Text>
					<Text style={styles.price}>
						Price: {giatien(Data.price)}
					</Text>
					<Text>Colour:{Data.colour}</Text>
				</View>
			</View>
      </TouchableOpacity>
  );

}

function Products (navigation){
    return(
        <View style={styles.waper}>
          <Header title='Sản phẩm'></Header>
           <FlatList
              data={Data}
              keyExtractor={item => item.id} 
              renderItem={({item}) => <ItemList Data={item}></ItemList>}
              ></FlatList>
        </View>

    );
}


const styles =StyleSheet.create({
    waper:{
        flex:1,
       
},
 bt:{
       width: 100,
       height: 40,
      borderRadius:7,
      backgroundColor:'#ff0000',
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
    },
tlg:{
        color:'#ffffff',
        fontSize:17,
        fontWeight:'bold'

    },
container: {
		padding: 10,
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 7,
		overflow: 'hidden',
	},
	containerImage: { width: 100, height: 150 },
	image: {
		width: 100,
		height: 150,
		resizeMode: 'contain',
	},
	content: {
		marginLeft: 10,
		flex: 1,
	},
	header: {
		fontSize: 20,
		marginBottom: 10,
	},
	price: {
		fontSize: 15,
		marginBottom: 10,
	},
});

export default Products