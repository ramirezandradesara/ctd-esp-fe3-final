import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export interface CardHomeProps {
    title: string,
    image: string,
    id: number,
}

export default function CardHome({ title, image, id }: CardHomeProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                title={`${title} imagen`}
                height="300"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={'/checkout'}>
                    <Button size="small">
                        Comprar
                    </Button>
                </Link>
                <Link href={`/comics/${id}`}>
                    <Button size="small">
                        Ver detalle
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}