import React, {useState, useEffect} from "react";
import { Grid } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useParams } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import SuspectGallery from "../../components/SuspectGallery/SuspectGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function ProfilePage(props) {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [user, setUser] = useState({})
	const [suspects, setSuspects] = useState([]);
	const {username} = useParams();

	async function getProfile() {
		try {
			const data = await userService.getProfile(username)
			console.log(data, "<- getProfile data")
			setUser(() => data.user)
			setLoading(() => false);
			setSuspects(() => data.suspects);
			} catch (err) {
			console.log(err)
			setError("Profile doesn't exist, check express terminal")
		}
	}

	useEffect(() => {
		getProfile();
	  }, []);

	  if (error) {
		return (
		  <>
			<TopNav handleLogout={props.handleLogout} user={props.user}/>
			<ErrorMessage error={error} />;
		  </>
		);
	  }

	  if (loading) {
		  return (
			  <>
			<TopNav handleLogout={props.handleLogout} user={props.user}/>
			  <h1>Acquiring SSN, parsing bank details, transferring...</h1>
			</>
		  )
	  }

	return (
		<Grid>
		  <Grid.Row>
			<Grid.Column>
			  <TopNav user={props.user} handleLogout={props.handleLogout}/>
			</Grid.Column>
		  </Grid.Row>
		  <Grid.Row>
			<Grid.Column>
				<ProfileBio/>
			</Grid.Column>
			</Grid.Row>
		  <Grid.Row centered>
			<Grid.Column style={{ maxWidth: 750 }}>
			<SuspectGallery
				isProfile={true}
				suspects={props.suspects}
				numPhotosCol={3}
				user={props.user}
			  />
			</Grid.Column>
		  </Grid.Row>
		</Grid>
	  );
}

export default ProfilePage