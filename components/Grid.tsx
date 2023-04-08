import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgMediaCard from 'dh-marvel/components/Cards/Card'

export default function ResponsiveGrid({ data }: any) {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item: any, index: React.Key | null | undefined) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ImgMediaCard
              title={item.title}
              image={item?.thumbnail?.path + "." + item?.thumbnail?.extension}
              id={item?.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
