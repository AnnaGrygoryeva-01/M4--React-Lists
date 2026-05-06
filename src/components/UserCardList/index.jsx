import { Component } from "react";
import styles from "./UserCardList.module.css";
import UserCard from "../UserCard";

class UserCardList extends Component {
  filterUsers = (user) => {
    return user.firstName || user.lastName;
  };

  mapUsers = ({ id, firstName, lastName, profilePicture, contacts }) => (
    <UserCard
      key={id}
      firstName={firstName}
      lastName={lastName}
      profilePicture={profilePicture}
      contacts={contacts}
    />
  );

  render() {
    const { usersArray } = this.props;

    return (
      <section className={styles.cardList}>
        {usersArray.filter(this.filterUsers).map(this.mapUsers)}
      </section>
    );
  }
}

export default UserCardList;
