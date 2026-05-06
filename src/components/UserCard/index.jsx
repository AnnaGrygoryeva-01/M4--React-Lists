import React, { Component } from "react";
import styles from "./UserCard.module.css";
import { getSocialIcon } from "../../helpers/socialLinksHelper";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasImageError: false,
    };
  }

  handleImageError = () => {
    this.setState({ hasImageError: true });
  };

  render() {
    const { firstName, lastName, profilePicture, contacts } = this.props;
    const { hasImageError } = this.state;

    const fullName = `${firstName} ${lastName}`.trim();
    const showPlaceholder = !profilePicture || hasImageError;

    return (
      <article className={styles.userCard}>
        {showPlaceholder ? (
          <div className={styles.placeholderAvatar}>
            {firstName[0] || " "}
            {lastName[0] || " "}
          </div>
        ) : (
          <img
            className={styles.profilePicture}
            src={profilePicture}
            alt="Profile picture"
            onError={this.handleImageError}
          />
        )}

        <h2 className={styles.fullName}>{fullName || "Unknown"}</h2>

        <div className={styles.socialLinksContainer}>
          {contacts?.length > 0 ? (
            <ul className={styles.socialLinksEl}>
              {contacts.map((url, index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className={getSocialIcon(url)}></i>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.socialLinksEl}>No social links provided</p>
          )}
        </div>
      </article>
    );
  }
}

export default UserCard;
