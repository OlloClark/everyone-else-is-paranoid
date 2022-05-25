import React from 'react';
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SuspectCard({suspect, isProfile, user}) { 

  return (
    <Card key={suspect._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${suspect.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  suspect.user.photoUrl
                    ? suspect.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {suspect.user.username}
            </Link>
            <p>Suspect's alias: {suspect.lastName}</p>
          </Card.Header>
        </Card.Content>
      )}

      <Image src={`${suspect.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          {suspect.firstName} <br />
          Real name: Batman <br />
          Other aliases: Robin <br />
          Affiliations: Moldova
          </Card.Description>
      </Card.Content>
    </Card>
  );

}

export default SuspectCard;