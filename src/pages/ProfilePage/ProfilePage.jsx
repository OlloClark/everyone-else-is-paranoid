import React, {useState, useEffect} from "react";

import userService from "../../utils/userService";
import { useParams } from "react-router-dom";

function ProfilePage(props) {

	const [error, setError] = useState("")
	const [user, setUser] = useState({})
	const {username} = useParams();

	async function getProfile() {
		try {
			const data = await userService.getProfile(username)
			console.log(data, "<- data")
			setUser(() => data.user)

		} catch (err) {
			console.log(err)
			setError("Profile Doesn't exists, check express terminal!")
		}
	}

	useEffect(() => {
		getProfile();
	  }, []);



	return (
		<h1>This is a profile page. All suspects for this user will be displayed here</h1>
	)
}

export default ProfilePage