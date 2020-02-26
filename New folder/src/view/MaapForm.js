import React from 'react';
import '../CommonStyle/bootstrap.css';
import FileData from './jsondata.json'
class Maapform extends React.Component {
    state = {
        Airport: null,
        Aircraft: null,
        OAGCode: null,
        EnteredValue: [],
        Items: FileData.map((data) =>
            data.name 
        ), 
        text:''

    }
    handleEvent = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSumbmitEvent = (e) => {
        e.preventDefault();
        if(this.state.Aircraft!==null|this.state.Airport!==null|this.state.OAGCode!==null)
        this.props.AddMaapDeails(this.state)
    }

    handleAutocompeleteEvent = (e) => {
        const value = e.target.value;
        let EnteredValue = [];
        if (value.length > 0) {
            const reger = new RegExp(`^${value}`, 'i')
            EnteredValue = this.state.Items.sort().filter(v => reger.test(v))
            if (EnteredValue.length === 0) { EnteredValue = "No found data..!" }
        }

        this.setState(() => ({ EnteredValue ,text:value}))
    }
    render() {
        let optionItems = FileData.map((data) =>
            <option key={data.id} value={data.name}>{data.name}</option>
        )
        const {text}=this.state

        return (
            <form onSubmit={this.handleSumbmitEvent}>
                <label>Aircraft Name *
        <input type="text" id="Aircraft" onChange={this.handleEvent}></input></label>
                <label>Airport Name *
        <input type="text" id="Airport" onChange={this.handleEvent}></input></label>
                <label>OAG *
        <input type="text" id="OAGCode" onChange={this.handleEvent}></input></label>
                <div id="ddl">
                    <select>
                        {optionItems}
                    </select>
                </div>
                <label>Search Text </label>
                <input type="text" value= {text} id="searchAircraft" onChange={this.handleAutocompeleteEvent}></input>
                <br />
                
                <ul>
          {this.state.EnteredValue.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
                <br />
                <button type="submit">Submit </button>
            </form>
        )
    }
}

export default Maapform;
