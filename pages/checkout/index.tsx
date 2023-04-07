import { Box, Grid } from '@mui/material'
import Card from 'dh-marvel/components/Card'
import Stepper from 'dh-marvel/components/Stepper'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import React from 'react'

function Checkout() {
  return (
    <LayoutCheckout>
      <BodySingle title='Checkout'>
        <Box sx={{ flex: '2' }}>
          <Stepper />
          {/* <Card /> */}
        </Box>
      </BodySingle>
    </LayoutCheckout>
  )
}

export default Checkout