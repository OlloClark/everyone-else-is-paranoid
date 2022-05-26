import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

function ProfileBio({ user }) {
  return (
    <Grid textAlign="center" columns={1} >
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 300 }}>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            avatar
            size="small"
          />
          <Segment vertical>
            <h2>BIOGRAPHY REDACTED</h2>
            <h3><s>{user.username}</s></h3>
            <h3>676127387348723648462837</h3>
            <h3>623547623548276997627334</h3>
            <h3>276347236492364923764734</h3>
          </Segment>
        </Grid.Column >
      </Grid.Row>
    </Grid>
  );
}

export default ProfileBio;
