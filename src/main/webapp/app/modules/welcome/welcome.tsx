import './welcome.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IWelcomeProp = StateProps;

export const Welcome = (props: IWelcomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col>
        <h1>Baaja</h1>
        <h2>Welcome!</h2>
        <p className="lead">Log in to your Baaja account or enter code to join</p>
        <div>
          <input type="text" placeholder="Enter code to join"/>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <button>Join</button>
        </div>
        <p/>

        {account && account.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (

          <div>
            <Alert>
              or press the button to log in
              <Link to="/login" className="alert-link">
                {' '}
                <br /> Log in
              </Link>
              <br /> You can try the default accounts:
              <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
              <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
            </Alert>

            <Alert color="warning">
              New to Baaja?&nbsp;
              <Link to="/account/register" className="alert-link">
                Sign up now
              </Link>
            </Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Welcome);
