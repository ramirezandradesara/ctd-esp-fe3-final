import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';
import Head from 'next/head'
import router from 'next/router';
import React, { useEffect } from 'react'

function PurchaseConfirmation() {
  const [purchase, setPurchase] = React.useState<CheckoutInput>();

  useEffect(() => {
    const item = localStorage.getItem('purchase-data')
    if (item !== null) {
      setPurchase(JSON.parse(item).data);
    } else {
      router.push("/");
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Compra exitosa | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <Card sx={{ maxWidth: 345 }}>
          <Box
            sx={{
              paddingY: "5px",
              backgroundColor: "#43a14d",
              color: 'white'
            }}>
            <Typography gutterBottom variant="h5" component="div">
              ¡Qué disfrutes de tu compra!
            </Typography>
          </Box>
          <CardMedia
            sx={{ height: 300 }}
            image={purchase?.order?.image}
            title={purchase?.order?.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {purchase?.order?.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Nombre y apellido: {purchase?.customer?.name} {purchase?.customer?.lastname}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Dirección de entrega: {purchase?.customer?.address?.address1} {purchase?.customer?.address?.address2}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Pagás ${purchase?.order?.price}
            </Typography>
          </CardContent>
        </Card>
      </LayoutCheckout>
    </>
  )
}

export default PurchaseConfirmation