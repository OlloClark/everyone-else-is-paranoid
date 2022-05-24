import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import AddSuspect from "../../components/NewSuspectForm/NewSuspectForm";
import SuspectFeed from '../../components/SuspectFeed/SuspectFeed';
import * as suspectsAPI from "../../utils/suspectAPI";



function SuspectFeedPage({user, handleLogout}) {
	const [suspects, setSuspects] = useState([])

	async function handleAddSuspect(suspect) {
		const data = await suspectsAPI.create(suspect)
		console.log(data, "<- this is the data")
	}


	return(
	<>
	<TopNav user = {user} handleLogout={handleLogout} />
	<h1>Logged in. Suspect Feed here</h1>
	<AddSuspect handleAddSuspect={handleAddSuspect}/>
	<SuspectFeed />

	
	
	</>
	)
}

export default SuspectFeedPage
