import React from 'react';
import  '../CommonStyle/bootstrap.css';

class Maapform extends React.Component{
    state ={
        Airport : null,
        Aircraft : null,
        OAGCode : null
    }
handleEvent=(e)=>
{
this.setState({
    [e.target.id]: e.target.value
})
}
handleSumbmitEvent=(e)=>
{
e.preventDefault();
this.props.AddMaapDeails(this.state)
}

render(){
     return (
    <form onSubmit={this.handleSumbmitEvent}>
        <label>Aircraft Name
        <input type="text" id ="Aircraft" onChange={this.handleEvent}></input></label>
        <label>Airport Name
        <input type="text" id ="Airport" onChange={this.handleEvent}></input></label>
        <label>OAG
        <input type="text" id ="OAGCode" onChange={this.handleEvent}></input></label>
        <button type="submit">Submit </button>
    </form>
  )}

}
export default Maapform;