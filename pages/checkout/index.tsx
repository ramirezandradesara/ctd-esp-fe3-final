import { Box, Grid, Stack } from '@mui/material'
import CardCheckout from 'dh-marvel/components/Cards/CardCheckout'
import Stepper from 'dh-marvel/components/Form/Stepper'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout() {
  const router = useRouter();
  const { comic } = router.query;
  const [comicData, setComicData] = useState<any>();

  useEffect(() => {
    const id = parseInt(comic as string);

    if (comic) {
      getComic(id).then((data: any) => {
        setComicData(data);
      });
    }
  }, [comic]);

  return (
    <>
      <Head>
        <title>Checkout | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle title='Checkout'>
          <Box sx={{ padding: { xs: "20px", sm: "20px" } }} display={'flex'} justifyContent={'center'}>
            <Stack
              direction={{ sm: "column", md: "row-reverse" }}
              spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
              alignItems={'center'}
            >
              <CardCheckout
                title={comicData?.title}
                image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
                price={comicData?.price}
                id={comicData?.id}
              />
              <Stepper
                title={comicData?.title}
                image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
                price={comicData?.price}
              />
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout
