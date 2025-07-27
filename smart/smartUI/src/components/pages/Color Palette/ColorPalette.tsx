import React from 'react'
import './colorpalette.css'
import locationIcon from '../../../assets/location-icon.svg'

const ColorPalette = () => {
  return (
    <div className="main-container-color">
      <div className="color-container">
        <div className="color-location">
          <img src={locationIcon} alt="" />
        </div>
        <div className="color-header">
          <h2>Color Palette</h2>
          <p>A color palette, in the digital world, refers to full range of colors that can be displayed on a device screen or other interface, or in <br />
            some cases, collection and tools for use in aleo Projects
          </p>
        </div>
      </div>
      <div className="main-colors">
        <h3>Main colors</h3>
        <p>The main colors are blue <span>(#0075A9)</span> to be used as a visual recognition and the dark blue <span>(#193CGB)</span> of the winglet to be used to <br />
          enhance the layout oc communication material.
        </p>
      </div>
      <div className="grid-container-color1">
        <div className="grid-parent1">
          <div className="grid-p1-item1">
            <h3>#0075A9</h3>
          </div>
          <div className="grid-p2-item2">
            <h3>#0075A9</h3>
          </div>
          <div className="grid-p3-item3">
            <h3>#0075A9</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette