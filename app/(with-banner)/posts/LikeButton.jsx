'use client'
import { Container, IconButton } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import '@fontsource/roboto/300.css';

import { useState } from 'react'


export function LikeButton({id}) {
    const [liked, setLiked] = useState(false)

    return (
        <Container>
        <IconButton color="primary" aria-label="add to shopping cart" size="large" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteIcon fontSize="inherit"/> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        </Container>
    )
}