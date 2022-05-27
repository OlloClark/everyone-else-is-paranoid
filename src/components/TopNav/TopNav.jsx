import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import suspicious from "../../assets/suspicious.png"

export default function TopNav({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing>
      <Header as="h2" floated="right">
        <Link to="/">
          <Icon size= "large" color="black" name="eye"></Icon>
        </Link>
        <Link  to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to={`/${user?.username}`}>
          <Image
            src={
              suspicious
            }
            avatar
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}