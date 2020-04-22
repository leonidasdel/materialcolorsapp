import React, { Component } from 'react'
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePaeltte } from './ColorHelpers';
import {Route,Switch} from "react-router-dom"
import Palettelist from './Palettelist';

export default class App extends Component {


  findPalette(id){
    return seedColors.find((palette)=>{
      return palette.id===id
    })
  }

  render() {
    
  
    
    return (
      <Switch>
  <Route exact path="/" render={()=> <Palettelist palettes={seedColors}/>} />
  <Route exact path="/palette/:id" render={(routeProps)=> <Palette palette={generatePaeltte(this.findPalette(routeProps.match.params.id))} />} />
    </Switch>
      // {/* <div>
      //   <Palette palette={generatePaeltte(seedColors[1])} />
      // </div> */}
    )
  }
}



