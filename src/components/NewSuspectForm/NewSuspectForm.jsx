import React, { useState } from "react";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

function NewSuspectForm(props) {
	const [selectedFile, setSelectedFile] = useState("")
	const [state, setState] = useState({
		firstName: "",
		lastName: ""
	})

	function handleFileInput(e) {
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
		formData.append("photo", selectedFile)
		formData.append('firstName', state.firstName)
		formData.append('lastName', state.lastName)
		props.handleAddSuspect(formData); 
		
		// Have to submit the form now! We need a function!
	  }



	return(
		<Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
		<div>
			<p>hello</p>
		</div>

        <Segment>

			<div>
				Type first and last name. You'll get:
				<br />
				Suspect is DEFINITELY watching you
				<br />
				Suspect is MAYBE watching you
				<br />
				Suspect is NOT watching you
			</div>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              	<Form.Input
                  className="form-control"
                  name="firstName"
                  value={state.firstName}
                  placeholder="first name"
                  onChange={handleChange}
                  required
              	/>   

				<Form.Input
                  className="form-control"
                  name="lastName"
                  value={state.lastName}
                  placeholder="last name"
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
		
	)
}

export default NewSuspectForm;