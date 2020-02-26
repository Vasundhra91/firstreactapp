import React from 'react';
import  './CommonStyle/bootstrap.css';
import RangeCircle from "./view/RangeCircle.js";
import MaapRangeCircle from "./view/MaapForm.js";
//  var express = require('express');
// var app = express();
// app.set('view engine','ejs');

// app.get('/', function(request,response){
//  response.render('/index.html');
// });
// app.listen(3000);

class App extends React.Component{
  state={
  Maapdetails :[
    {Airport: "Delhi" ,Aircraft: "DEL",OAGCode: "hjj",id:1},
    {Airport: "Uttrakhand" ,Aircraft: "UK",OAGCode: "UK$",id:2},
    {Airport: "Up" ,Aircraft: "UP_AC",OAGCode: "UP%",id:3}
]
  }
  AddDetails=(details)=>
  { //add input id
    details.id=Math.random();
    // add all value in Array
    let Maapdetails =[...this.state.Maapdetails,details]
    this.setState({
      Maapdetails: Maapdetails
    })

  }
  DeleteMaapdetails=(id)=>
  { 
    let Maapdetails= this.state.Maapdetails.filter(maap=>{
      return maap.id !==id
    })
    this.setState({
      Maapdetails: Maapdetails
    })
  }
  
  render(){
  return (
    <div className="App">
      <h2>Range circle</h2>
      <RangeCircle Maapdetails={this.state.Maapdetails} DeleteMaapdetails={this.DeleteMaapdetails} />
      <MaapRangeCircle AddMaapDeails={this.AddDetails} />
    </div>
);}
}


export default App;
