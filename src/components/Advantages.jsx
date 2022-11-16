import React from 'react'
import { Box, Stack } from '@mui/material'
import quickDelivery from '../images/quicklogo.gif'
import custumizationLogo from '../images/customlogo.gif'
import easyReturn from '../images/easyReturn.gif'
import codLogo from '../images/codLogo.gif'
import './style.css'

const Advantages = () => {
    
    return (
        <Box px={{xs:4, sm:8, md:12}} py={{xs:.1,sm:.2,md:.4}} sx={{ backgroundColor: '#FFF' }}>
            <h2 className='heading'> Our Promises </h2>
            <Stack flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
                <Stack m={5} width={250} alignItems='center' borderRadius={30} >
                    <img src={quickDelivery} alt="quickDelivery-logo" width={200}/>
                </Stack>

                <Stack m={5} width={250} alignItems='center' borderRadius={30} >
                    <img src={custumizationLogo} alt="custumization-logo" width={200}/>
                </Stack>
                <Stack m={5} width={250} alignItems='center' borderRadius={30} >
                    <img src={easyReturn} alt="custumization-logo" width={200}/>
                </Stack>
                <Stack m={5} width={250} alignItems='center' borderRadius={30} >
                    <img src={codLogo} alt="custumization-logo" width={200}/>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Advantages