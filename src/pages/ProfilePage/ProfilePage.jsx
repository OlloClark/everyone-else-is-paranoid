import { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import TopNav from "../../components/TopNav/TopNav";
import Loading from "../../components/Loader/Loader";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import SuspectGallery from "../../components/SuspectGallery/SuspectGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useParams } from "react-router-dom";
import * as snoopsAPI from '../../utils/snoopAPI';

export default function ProfilePage(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [suspects, setSuspects] = useState([]);
  const { username } = useParams();

  async function addSnoop(suspectId){
    try {
      const data = await snoopsAPI.create(suspectId)
      console.log(data, ' <- response from the server when we add a snoop');
      getProfile();
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  }
  
  async function removeSnoop(snoopId){
    try {
      const data = await snoopsAPI.removeSnoop(snoopId);
      console.log(data, '<- the response from server when we remove a snoop')
      getProfile()
      
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  }

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, " < -- data");
      setLoading(() => false);
      setUser(() => data.user);
      setSuspects(() => data.suspects);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
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
        <Loading />
      </>
    );
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <TopNav handleLogout={props.handleLogout} user={props.user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
        <SuspectGallery
            addSnoop={addSnoop}
            removeSnoop={removeSnoop}
            isProfile={true}
            suspects={suspects}
            numPhotosCol={3}
            user={props.user}
            
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

