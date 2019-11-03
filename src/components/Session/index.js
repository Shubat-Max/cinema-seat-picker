import React, { useEffect } from "react";
import { PageWrapper, StyledPicker } from "./Session.sc";
import Picker from "./Picker";
import Footer from "./Footer";
import Header from "./Header";
import { connect } from "react-redux";
import { loadSessionStart, loadSessionSuccess } from "../../actions/session";
import Loader from "../Loader";

export const Session = ({
  loadSessionStart,
  loadSessionSuccess,
  loading,
  loaded,
  session
}) => {
  useEffect(() => {
    loadSessionStart();
    loadSessionSuccess();
  }, [loadSessionStart, loadSessionSuccess]);

  const getPicker = () => (
    <PageWrapper>
      <Header />

      <StyledPicker>
        <Picker />
      </StyledPicker>

      <Footer />
    </PageWrapper>
  );

  const getLoader = () => (
    <PageWrapper>
      <Loader />
    </PageWrapper>
  );

  if (loaded && !loading && session) return getPicker();
  else return getLoader();
};

const mapStateToProps = state => ({
  loading: state.session.loading,
  loaded: state.session.loaded,
  session: state.session.entities
});

export default connect(
  mapStateToProps,
  {
    loadSessionStart,
    loadSessionSuccess
  }
)(Session);
