import React, { Component } from 'react';
import MovieList from './MovieList';
import { ScrollView, Text, View, Image } from 'react-native';
import { movies } from './Data';
 

export default class Movies extends Component {
  render() {
    return (
     <View>
       <ScrollView
      contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
      >
        {movies.map((movie, index) => (
          <MovieList movie={movie} key={index} />
        ))}
        
        </ScrollView>
        </View>
      
    );
  }
}

