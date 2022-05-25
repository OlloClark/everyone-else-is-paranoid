import React from 'react';
import { Card } from 'semantic-ui-react'
import SuspectCard from '../SuspectCard/SuspectCard';

function SuspectGallery({suspects, numPhotosCol, user}) {
	return(
		<Card.Group itemsPerRow={numPhotosCol} stackable>
        {suspects.map((suspect) => {
          return (
            <SuspectCard
              suspect={suspect}
              key={suspect._id}
              user={user}
            />
          );
        })}
      </Card.Group>
	)
}

export default SuspectGallery