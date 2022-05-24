import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import AddSuspect from "../../components/NewSuspectForm/NewSuspectForm";
import SuspectFeed from '../../components/SuspectFeed/SuspectFeed'; 



function SuspectFeedPage({user, handleLogout}) {


	return(
	<>
	<TopNav user = {user} handleLogout={handleLogout} />
	<h1>Logged in. Suspect Feed here</h1>
	<AddSuspect />
	<SuspectFeed />

	
	
	</>
	)
}

export default SuspectFeedPage
