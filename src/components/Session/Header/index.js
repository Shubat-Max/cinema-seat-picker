import React from "react";
import { StyledHeader, SessionSubtitle, SessionTitle } from "./Header.sc";
import { connect } from "react-redux";

const Header = ({ session: { timestamp, movieTitle, place } }) => {
  const getFormatDate = () => {
    let options = {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    let schedule = new Date(timestamp * 1000);
    return schedule.toLocaleDateString(undefined, options);
  };

  return (
    <StyledHeader>
      <SessionTitle>{movieTitle}</SessionTitle>

      <SessionSubtitle>
        <p>{getFormatDate()}</p>
        <p>
          <b>{place.name}</b> | {place.city}, {place.country}
        </p>
      </SessionSubtitle>
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  session: state.session.entities
});

export default connect(mapStateToProps)(Header);
