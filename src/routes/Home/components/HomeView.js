import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <Button raised color='primary'>
      PRIMARY
    </Button>
    <Button raised color='accent'>
      ACCENT
    </Button>
    <Button raised color='contrast'>
      CONTRAST
    </Button>
    <div>
      <TextField
        required
        id="required"
        InputClassName="test-css"
        label="Required"
        defaultValue="Hello World"
        margin="normal"
        autoFocus={true}
      />
      <TextField
        id="date"
        label="Choose date"
        type="date"
        defaultValue="2017-08-24"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  </div>
)

export default HomeView
