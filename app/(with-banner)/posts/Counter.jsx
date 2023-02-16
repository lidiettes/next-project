'use client'
import { Button } from "@mui/material"
import { useState } from 'react'

export function Counter (){
    const [count, setCount] = useState(0)
    return (
<div>
    <p> Count:{count} </p>
    <Button variant="outlined" onClick={() => setCount(count + 1)}>Increment </Button>
</div>
    )
}