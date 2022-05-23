import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import Banner from "../../components/Banner/Banner";
import OpeningBlurb from "../../components/OpeningBlurb/OpeningBlurb";

export default function LoginPage(props) {
  return (
    <>
      <h1>Setup Login Page</h1>
      <>
      <Banner />
      
      </>
      
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
        
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>


      <ul>
        <li>Read the Login Model, You can change it to fit your needs</li>
        <li>
          Make sure you read the Login func in the User Controller, to know how
          it is setup to find the user!
        </li>
      </ul>
    </>
  );
}
