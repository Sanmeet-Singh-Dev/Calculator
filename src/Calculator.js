import { evaluate } from "mathjs";
import React,{ useState } from "react";
import { Display } from "./Display";
import { Buttons } from "./Buttons";
import { Box, Container } from "@mui/material";


export const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleBtnClick = (value) => {
        if (value === '=') {
            try{
                setDisplay(evaluate(display).toString());
            } catch (e) {
                setDisplay('Error');
            }
        } else if (value === 'C'){
            setDisplay('');
        }else {
            setDisplay(display + value);
        }
    }

    return (
        <Container maxWidth="xs">
            <Box mt={5} borderRadius={2} p={2} boxShadow={3}>
                <Display value={display} />
                <Buttons onBtnClick={handleBtnClick} />
            </Box>
        </Container>
    )

}

