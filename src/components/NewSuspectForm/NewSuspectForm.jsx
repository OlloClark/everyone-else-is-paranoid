import React, { useState } from "react";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

function NewSuspectForm(props) {
	const [state, setState] = useState({
		firstName: ""
	})
	
	  function handleChange(e){
		setState({
		  ...state,
		  [e.target.name]: e.target.value
		})
	  }
	
	  function handleSubmit(e){
		e.preventDefault()
				 
		const formData = new FormData()
		formData.append('firstName', state.firstName)
		props.handleAddPost(formData); 
		
		// Have to submit the form now! We need a function!
	  }



	return(
		<Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.firstName}
                  placeholder="first name"
                  onChange={handleChange}
                  required
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
		
	)
}

export default NewSuspectForm;