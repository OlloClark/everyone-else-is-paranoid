import React, {useState, useEffect} from "react";
import userService from "../../utils/userService";
import { useParams } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";

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
		<>
		<TopNav />
		<h1>This is {username}'s profile page. All {username}'s suspects will be displayed here</h1>
		</>
	)
}

export default ProfilePage