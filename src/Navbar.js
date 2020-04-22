import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css'
import './Navbar.css'
export default class Navbar extends Component {

    state = {
        format:"hex",
        open:false
    }

    changeLevel=(level)=>{
        this.props.changeLevel(level)
    }

    handleChange=(evt)=>{
        this.setState({format:evt.target.value,open:true})
        this.props.handleChange(evt)
    }

    closeSnackBar = ()=>{
        this.setState({open:false})
    }

    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <Link to='/'>reactcolorpicker</Link>
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
            <Snackbar anchorOrigin={{vertical:"bottom",horizontal:"left"}} open={this.state.open} autoHideDuration={3000}
            message={<span id="message-id">Format Changed! </span>}
            ContentProps={{
                "aria-describedby":"message-id"
            }}
            onClose={this.closeSnackBar}
            action={[
                <IconButton color="inherit" key="close"
                aria-label='close' onClick={this.closeSnackBar}>
                <CloseIcon />
                </IconButton>
            ]}
             />
                
            </header>
        )
    }
}
