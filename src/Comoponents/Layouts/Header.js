import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline">Excercise Database</Typography>
      </Toolbar>
    </AppBar>
  )
}
