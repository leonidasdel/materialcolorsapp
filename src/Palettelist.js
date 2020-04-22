import React, { Component } from 'react'
import {Link} from "react-router-dom"
import MiniPalette from './MiniPalette'

export default class Palettelist extends Component {
    render() {
        const {palettes}=this.props
        return (
            <div>
                {palettes.map(palette=>{
                    return <MiniPalette {...palette} />
                })}
            </div>
        )
    }
}
