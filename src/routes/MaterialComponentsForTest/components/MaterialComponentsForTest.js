import React from 'react'
import './MaterialComponentsForTest.scss'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'

export const MaterialComponentsForTest = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default MaterialComponentsForTest
