import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import AddSuspect from "../../components/NewSuspectForm/NewSuspectForm";
import SuspectFeed from '../../components/SuspectFeed/SuspectFeed';
import * as suspectsAPI from "../../utils/suspectAPI";
import { Grid } from "semantic-ui-react";




function SuspectFeedPage({user, handleLogout}) {
	const [suspects, setSuspects] = useState([])
	const [error, setError] = useState("");

	async function handleAddSuspect(suspect) {
		try {
		console.log(suspect)
		const data = await suspectsAPI.create(suspect)
		console.log(data, "<- this is the new data")
		setSuspects((suspects) => [data.suspect, ...suspects])
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

	return(
	 <Grid centered>
      <Grid.Row>
        <Grid.Column>
	<TopNav user = {user} handleLogout={handleLogout} />
	</Grid.Column>
	</Grid.Row>
	<Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
	<h1>Logged in. Suspect Feed here</h1>
	<AddSuspect handleAddSuspect={handleAddSuspect}/>
	</Grid.Column>
	</Grid.Row>
	<Grid.Row>
    <Grid.Column>
	<SuspectFeed />
	</Grid.Column>
	</Grid.Row>
	</Grid>

	

	)
}

export default SuspectFeedPage
