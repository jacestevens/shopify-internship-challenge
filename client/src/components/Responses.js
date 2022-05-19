import React from 'react'
import {Box, Container, Paper, Typography, Divider, Stack} from '@mui/material'

const Responses = () => {
  return (
    <Box className='my-5'>
        <Container>
          <div className='flex flex-wrap gap-4'>

            <Paper elevation={3} className=' flex flex-col gap-5 p-10 w-2/5'>
                <Typography align='left'>
                    Prompt: This is an example Prompt and it will tell me what is going on in here
                </Typography>
                <Divider/>
                <Typography align='left'> 
                  Open AI: This is my answer to the prompt you have asked for, it will be better if i answer this as long as I could because it is 
                  better if i have a long response
                </Typography>
            </Paper>
          
            
          </div>
        </Container>
    </Box>
  )
}

export default Responses