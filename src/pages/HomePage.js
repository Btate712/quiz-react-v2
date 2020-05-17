import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.login("admin", "admin");
  }

  render() {
    return (
      <>
        <h1>Home Page...</h1>
        <h2>Welcome {this.props.user.name ? this.props.user.name : "loading"}</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    login: (name, password) => dispatch(login("http://localhost:3000", name, password))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);