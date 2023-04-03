import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SimpleAccordion from './SimpleAccordion';

export interface MediaCardProps {
    title: string,
    description: string,
    image: string,
    id: number,
    price: number,
    oldPrice: number
    stock: number
    characters: any
}

export default function MediaCard({ title, description, image, price, id, oldPrice, stock, characters }: MediaCardProps) {
    console.log("🚀 ~ file: CardDetails.tsx:23 ~ MediaCard ~ characters:", characters)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    <span style={{ textDecoration: 'line-through' }}>${oldPrice}</span>
                    <span style={{ marginLeft: '0.5rem' }}>${price}</span>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description === ''
                        ? "Sin descripción disponible"
                        : description
                    }
                </Typography>
            </CardContent>
            <CardActions>
                {stock > 0
                    ?
                    <Button variant="contained" endIcon={<ShoppingCartOutlinedIcon />}>
                        Comprar
                    </Button>
                    :
                    <Button variant="contained" disabled>
                        Sin stock disponible
                    </Button>
                }
            </CardActions>
            <SimpleAccordion
                id={id}
                question='Characters'
                answer={characters}
            />
        </Card>
    );
}
