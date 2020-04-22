import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Palettelist extends Component {
    render() {
        const {palettes}=this.props
        return (
            <div>
                {palettes.map(palette=>{
                    return palette.paletteName
                })}
            </div>
        )
    }
}
