import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// }))

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottm: 10 }
}
export default function CenteredGrid() {
  //const classes = useStyles()

  return (
    // Need { flexGrow: 1 } or flexbox doesn't work correctly
    // This is different from the youtube instructions
    // But instructions are based upon beta version and
    // it has some descrpency. e.x. Tab is in @material-ui/core, not in Tabs
    <Grid container style={{ flexGrow: 1 }}>
      <Grid item xs={6}>
        <LeftPanel styles={styles} />
      </Grid>
      <Grid item xs={6}>
        <RightPanel styles={styles} />
      </Grid>
    </Grid>
  )
}
