import { Box, TextField, Button, Container } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Form = () => {


  const [openaiResponse, setopenaiResponse] = useState('')
  const [userPrompt, setuserPrompt] = useState('')
  const { Configuration, OpenAIApi } = require("openai");






  const submitPrompt = (e) => {

    e.preventDefault()

    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
      prompt: {userPrompt},
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     })
     .then((response) => {

      console.log(response.data.choices)
      console.log(response.data.choices[0].text)

     })
     .catch((err => console.log(err)))

    //  axios.post("https://api.openai.com/v1/engines/text-curie-001/completions", userPrompt)
    //   .then((response) => {

    //     console.log(response.data.choices)
    //     setopenaiResponse(response.choices[0].text)

    //   })

    //   .catch((err)=> console.log(err))

  }
  

  return (


    

    <form component="form" className='px-10' onSubmit={submitPrompt}>
        <Container>

            <TextField
                multiline
                rows={10}
                fullWidth
                margin='normal'
                variant='filled'
                placeholder='Enter Your Prompt Here'
                onChange={(e) => setuserPrompt(e.target.value)}
                value={userPrompt}
                >



            </TextField>
            <Button type='submit' endIcon={<SendIcon />} component='button' variant='contained' fullWidth> Submit </Button>
            <input type="submit" />

        </Container>
        <Container>
          <p>{openaiResponse}</p>
        </Container>
    </form>
  )
}

export default Form