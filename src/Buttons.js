import { Button, Grid } from '@mui/material';
import React from 'react'

export const Buttons = ({ onBtnClick}) => {
  
    const buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+',
        'C'
    ];
  
    return (
    <Grid container spacing={1}>
        {buttons.map((button) => (
            <Grid item xs={3} key={button}>
                <Button variant='contained' color={button === 'C' ? 'secondary' : 'primary'}
                onClick={() => onBtnClick(button)}
                fullWidth
                style={{height: '80px'}}>
                {button}
                </Button>
             </Grid>
        ))}
    </Grid>
  )
}
