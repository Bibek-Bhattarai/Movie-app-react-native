import React, { Component } from 'react';
import {days,times} from './Data'
 
import { ScrollView, Text, View, Image,TouchableOpacity,Button} from 'react-native';
 

export default class PopupMovie extends Component {
  state={
    bookedMovie:'',
    bookedDate:'',
    bookedShow:''

  }
  bookDate=()=>{
    //alert('date')
  }

  booktime=(time)=>{
    //alert(time)
  }

  bookTicket=()=>{
    //alert('booked')
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{flex:40, backgroundColor:'grey',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <Image 
       style={{width:100,height:100,marginTop:10,marginLeft:10,marginRight:10}} 
       source={{uri:this.props.movie.poster}} />
       <View style={{flex: 1}}> 
       <Text style={{fontSize:20, width:200}}numberOfLines={1} > 
       {this.props.movie.title}
       </Text> 
        <Text style={{fontSize:20, width:200}}numberOfLines={1} > 
       {this.props.movie.genre}
       </Text>
       </View>
       
      </View>
      <View style={{flex:20,backgroundColor:'green',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      
      <TouchableOpacity style={{}} onPress={this.bookDate}>
      
    {days.map((day)=>(
      <Text style={{fontSize:20,padding:15}}>{day}</Text>
    ))}
      </ TouchableOpacity>
      
      </View>
      <View style={{flex:20, backgroundColor:'skyblue',flexDirection:'row'}}>
      
      <ScrollView horizontal>
      
      
      {times.map((time)=>(
        <TouchableOpacity onPress={this.booktime(this.time)}>
      <Text style={{fontSize:20,padding:15}}>{time}</Text>
      </TouchableOpacity>
    ))}
     
    </ScrollView>
   

      </View>
      <View style=
      {{flex:20, backgroundColor:'',justifyContent:'center',alignItems:'center'}}>
       <Button title='Book my Ticket' onPress={this.bookTicket}/>
      </View>
      </View>
    );
  }
}
