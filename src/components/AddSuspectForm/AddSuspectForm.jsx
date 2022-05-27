import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddSuspectForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    suspectName: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('suspectName', state.suspectName)
    props.handleAddSuspect(formData); 
  }

  return (
    
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
          <div>
            Type first and last name. We will consult our databases and return one of the following:
            <br />
            Suspect is DEFINITELY watching you
            <br />
            Suspect is PROBABLY watching you
            <br />
            Suspect is NOT watching you
          </div>

            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="suspectName"
                  value={state.suspectName}
                  placeholder="Suspect's Name"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                Search Database
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}