import React, { Component } from 'react'
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePaeltte } from './ColorHelpers';

export default class App extends Component {
  render() {
    console.log(generatePaeltte(seedColors[3]))
    return (
      <div>
        <Palette palette={generatePaeltte(seedColors[1])} />
      </div>
    )
  }
}



