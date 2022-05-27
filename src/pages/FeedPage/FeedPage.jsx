import React, { useState, useEffect } from "react";

import TopNav from "../../components/TopNav/TopNav";
import AddSuspectForm from "../../components/AddSuspectForm/AddSuspectForm";
import SuspectGallery from "../../components/SuspectGallery/SuspectGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as suspectsAPI from "../../utils/suspectAPI";
import * as snoopsAPI from '../../utils/snoopAPI';
import { Grid } from "semantic-ui-react";

export default function Feed({user, handleLogout}) {
  console.log(suspectsAPI, " <-- suspectsAPI")
  const [suspects, setSuspects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function addSnoop(suspectId){
    try {
      const data = await snoopsAPI.create(suspectId)
      console.log(data, ' <- the response from the server when we add a snoop');
      getSuspects(); // <- to go get the updated posts with the like
    } catch(err){
      console.log(err)
      console.log("this error is coming from FeedPage")
      setError(err.message)
    }
  }

  async function removeSnoop(snoopId){
    try {
      const data = await snoopsAPI.removeSnoop(snoopId);
      console.log(data, '<-  this is the response from the server when we remove a snoop')
      getSuspects()
      
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  }


  // C create in Crud
  // we invoke this function in addPost component when the submit button on our form is clicked
  // so we need to pass it as a prop
  async function handleAddSuspect(suspect) {
    try {
      setLoading(true);
      const data = await suspectsAPI.create(suspect); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddSuspect");
      setSuspects([data.suspect, ...suspects]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  async function getSuspects() {
    try {
      const data = await suspectsAPI.getAll();
      console.log(data, " this is data,");
      setSuspects([...data.suspects]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getSuspects();
  }, []);

 
  if (error) {
    return (
      <>
        <TopNav handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <TopNav handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <TopNav handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddSuspectForm handleAddSuspect={handleAddSuspect} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SuspectGallery
            addSnoop={addSnoop}
            removeSnoop={removeSnoop}
            suspects={suspects}
            numPhotosCol={2}
            isProfile={false}
            loading={loading}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
