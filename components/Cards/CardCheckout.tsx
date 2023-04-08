import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SimpleAccordion from '../SimpleAccordion';
import Link from 'next/link';

export interface CardCheckoutProps {
    title: string,
    image: string,
    id: number,
    price: number,
}

export default function CardCheckout({ title, image, price, id }: CardCheckoutProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={image}
                title={`${title} imagen`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    <span>${price}</span>
                </Typography>
            </CardContent>
        </Card>
    );
}
