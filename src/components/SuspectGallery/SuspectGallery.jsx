import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import SuspectCard from '../SuspectCard/SuspectCard';
import Loader from '../Loader/Loader';

export default function SuspectFeed({suspects, numPhotosCol, isProfile, loading, user, addSnoop, removeSnoop }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {suspects.map((suspect) => {
          return (
            <SuspectCard
              addSnoop={addSnoop}
              removeSnoop={removeSnoop}
              suspect={suspect}
              key={suspect._id}
              isProfile={isProfile}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}