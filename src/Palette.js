import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Navbar from './Navbar'
export default class Palette extends Component {
    state={
        level:500,
        format:"hex"
    }

    changeLevel=(level)=>{
        this.setState({level})
    }
    changeFormat =(evt) => {
       this.setState({format:evt.target.value})
    }

    render() {
        const {format}=this.state
        const colorBoxes= this.props.palette.colors[this.state.level].map(color => (<ColorBox background={color[format]} name={color.name} />))
        return (
            <div className="Palette">
            <Navbar handleChange={this.changeFormat} level={this.state.level} changeLevel={this.changeLevel} />
            
            {/* navbar */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}
