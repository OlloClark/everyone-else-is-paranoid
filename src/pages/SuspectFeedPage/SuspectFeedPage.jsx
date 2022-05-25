import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import AddSuspect from "../../components/NewSuspectForm/NewSuspectForm";
import SuspectFeed from '../../components/SuspectFeed/SuspectFeed';
import * as suspectsAPI from "../../utils/suspectAPI";
import { Grid } from "semantic-ui-react";



function SuspectFeedPage({user, handleLogout}) {
	const [suspects, setSuspects] = useState([])

	async function handleAddSuspect(suspect) {
		const data = await suspectsAPI.create(suspect)
		console.log(data, "<- this is the data")
	}


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
