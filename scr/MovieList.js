import React,{Component} from 'react'
import{View, Text, Image,ScrollView,TouchableOpacity,Animated,Dimensions} from 'react-native'
import BookMovie from './BookMovie'

const{width,height}=Dimensions.get('window')


 
export default class MovieList extends Component{
  state={
  fadeValue:new Animated.Value(0),
  animHeight:0,
  animWidth:0

  }
  fadeAnimation = () => {
    // alert("Press Fade!");
    this.setState({
      animHeight:height/2,
      animWidth:width
    }) 
    Animated.timing(this.state.fadeValue, {
      toValue: 1,

        
    }).start()
}
  render(){
    return(
      <View>
       <Animated.View style={[{
     width:this.state.animWidth,
     height:this.state.animHeight,
     backgroundColor:''
       }
   ,
      {opacity:this.state.fadeValue}
      //{left:this.state.xvalue}
      ]}>
      <BookMovie movie={this.props.movie}/>
      
      </Animated.View>
      
 
<TouchableOpacity style={{marginTop:20}} onPress={this.fadeAnimation}>
<Image style={{height:120,width:120,marginButtom:5}}
       source={{uri:this.props.movie.poster}} />
       <View style={{flex:1}}>
       <Text style={{fontSize:16,textColor:'red',width:100}} numberOfLines={1}> {this.props.movie.title}</Text>
      
       <Text style={{width:100}}numberOfLines={1}> {this.props.movie.genre}</Text>
        </View>
</TouchableOpacity>
  
</View>
     
   
    )
  }
} 