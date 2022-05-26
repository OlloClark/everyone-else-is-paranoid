import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function SuspectCard({ suspect, isProfile, user }) {

  function suspectWatching(){
		const suspectChoices = ["suspect is PROBABLY watching you", "suspect is DEFINITELY watching you"]
	   
	   const randChoice = Math.floor(Math.random() * suspectChoices.length);
	   return (suspectChoices[randChoice])
	 }

   function showRealName() {
    const suspectNames = ["Aldrich “Rick” Ames", "Carl Lody", "Emil Julius Klaus Fuchs", "Frederick “Fritz” Joubert Duquesne"]
  
    const randSuspectName = Math.floor(Math.random() * suspectNames.length)
  
    return (suspectNames[randSuspectName])
  
  }

  const aliases = ["Kane Potts", "Kaila Dean", "Jazmin Robertson", "Kiera Jefferson", "Yareli Hurst","Gracie Hernandez", "Joaquin Russell", "Kenny Cook", "Isabel Peck", "Dakota Mclean","Jimena Roberts", "Gordon Crane", "Kaden Watson", "Karla Yang", "Rudy Payne","Nikolai Massey", "Sofia Brooks", "Nia Duffy", "Kenneth Bolton", "Lara Perez","Vicente Bailey", "Brenton Miller", "Crystal Lawrence", "Talan Mcbride", "Zackary Wu"]

  const randAlias = (aliases) => {
    const res = [];
    for (let i = 0; i < 4;) {
      const random = Math.floor(Math.random() * aliases.length);
      if (res.indexOf(aliases[random]) !== -1){
        continue;
      };
      res.push(aliases[random]);
      i++
    }
    return res.join(", ");
  }


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
          </Card.Header>
        </Card.Content>
      )}

      <Image src={`${suspect.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          {suspect.suspectName}  <br/>
          {suspectWatching()} <br/>
          Real name: {showRealName()} <br />
          Aliases: {randAlias(aliases)}<br />
          Affiliations: Moldova
          </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default SuspectCard;
