import React, { Component } from 'react';
import { StyleSheet, 
         Text,
         View,
         Image,
         TouchableOpacity 
        } from 'react-native';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    numero:0,
    botao:'VAI PORRA',
    ultimo: null
  };
  this.timer = null;
  this.vaiporra = this.vaiporra.bind(this);
  this.paraporra = this.paraporra.bind(this);
}

vaiporra(){
  if(this.timer != null){
    clearInterval(this.timer);
    this.timer = null
    this.setState({botao:'VAI PORRA'});
  }else{
 this.timer = setInterval(()=>{
    this.setState({numero:this.state.numero + 0.1})
  },100);

  this.setState({botao:'DOIS ALTOS'});
  }
}



paraporra(){
  if(this.timer != null){
    clearInterval(this.timer);
    this.timer = null
  }
  this.setState({
    ultimo:this.state.numero.toFixed(1),
    numero: 0,
    botao:'VAI PORRA'
  })
}
render(){
  return (
    <View style={styles.container}>
      <Image style={styles.cronometro} source={require('./assets/cronometro.png')}/>

      <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vaiporra}>
          <Text style={styles.btnTexto}> {this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.paraporra}>
          <Text style={styles.btnTexto}> PARA PORRA</Text>
        </TouchableOpacity>

      

      </View>

      <View style={styles.ultimo}>
        <Text style={styles.textoUltimo}> Ultimo Tempo: {this.state.ultimo}</Text>
      </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
  },

  timer:{
    marginTop:-160,
    color:'#fff',
    fontSize:65,
    fontWeight:'bold'
  },
  
  btnArea:{
    flexDirection:'row',
    marginTop:90,
    height:40
  },

  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:15,
    borderRadius: 9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },

  ultimo: {
    marginTop:40  
  },

  textoUltimo: {
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  }
});
export default App;