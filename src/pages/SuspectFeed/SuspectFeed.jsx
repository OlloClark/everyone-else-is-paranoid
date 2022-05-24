import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import NewSuspectForm from "../../components/NewSuspectForm/NewSuspectForm";


function SuspectFeed({user, handleLogout}) {


	return(
	<>
	<TopNav user = {user} handleLogout={handleLogout} />
	<h1>Logged in. Suspect Feed here</h1>
	<NewSuspectForm />

	
	
	</>
	)
}

export default SuspectFeed
