import React from "react";
import { Card, Image, Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import suspicious from "../../assets/suspicious.png"

function SuspectCard({ suspect, isProfile, user, removeSuspect, removeSnoop, addSnoop }) {

  // function handleDel() {
  //   removeSuspect(suspect._id)
  // }

  // We need to know if the logged in user has liked this particular post!
  // we search the array of objects that is post.likes to see if the logged in users
  // id exists in that array of objects
  const snoopIndex = suspect.snoops.findIndex(
    (snoop) => snoop.username === user.username
  );

  const clickHandler =
    snoopIndex > -1
      ? () => removeSnoop(suspect.snoops[snoopIndex]._id)
      : () => addSnoop(suspect._id);

  // if the logged users id exists, the heart should be red, because the logged in user has liked the post
  // and the clicked handler should removeLike
  const snoopColor = snoopIndex > -1 ? "purple" : "black";

  function suspectWatching() {
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
                src={suspicious}
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
          <Container textAlign='right'>
                <Icon
                align="right"
                name="user secret"
                size="large"
                color="black"
                onClick={clickHandler}
                />
                {suspect.snoops.length} Snoops. We need more.
            </Container>
      </Card.Content>
    </Card>
  );
}

export default SuspectCard;
