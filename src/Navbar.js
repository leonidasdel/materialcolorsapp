import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css'
import './Navbar.css'
export default class Navbar extends Component {

    state = {
        format:"hex"
    }

    changeLevel=(level)=>{
        this.props.changeLevel(level)
    }

    handleChange=(evt)=>{
        this.setState({format:evt.target.value})
        this.props.handleChange(evt)
    }

    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>    
                    <div className="slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="slider">
                <Slider defaultValue={this.props.level} min={100} max={900} step={100}  onAfterChange={this.changeLevel}/>
                    </div>
               
            </div>
            <div className="select-container">
            <Select value={this.state.format} onChange={this.handleChange}>
                <MenuItem value="hex">HEX - #fff
                </MenuItem>
                <MenuItem value="rgb">rgb(255,255,255)
                </MenuItem>
                <MenuItem value="rgba">rgba(255,255,255,1.0)
                </MenuItem>

            </Select>
            </div>
            
                
            </header>
        )
    }
}
