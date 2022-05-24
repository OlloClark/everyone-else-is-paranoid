import React from "react";
import TopNav from "../../components/TopNav/TopNav";


function SuspectPage({user, handleLogout}) {
	return(
	<>
	<TopNav user = {user} handleLogout={handleLogout} />
	<h1>Logged in. Submit Your first suspect here</h1>
	
	</>
	)
}

export default SuspectPage