import { Box, Typography } from '@mui/material'
import React from 'react'

export const Display = ({value}) => {
  return (
    <Box color="white" bgcolor="black" textAlign="right" height="80px" p={2} mb={2} borderRadius={1} display="flex" alignItems="center" justifyContent="flex-end">
        <Typography variant='h4'>{value}</Typography>
    </Box>
  )
}
