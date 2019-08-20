/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

const Form = () => (
  <div className="ui segment">
    <div className="ui attached message">
      <div className="header">Welcome to our site!</div>
      <p>Fill out the form below to sign-up for a new account</p>
    </div>
    <form className="ui form attached fluid segment">
      <div className="two fields">
        <div className="field">
          <label htmlFor="First Name" id="first-name">
            First Name
            <input placeholder="First Name" type="text" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="First Name" id="first-name">
            Last Name
            <input placeholder="Last Name" type="text" />
          </label>
        </div>
      </div>
      <div className="field">
        <label htmlFor="Username" id="username">
          Username
          <input placeholder="Username" type="text" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="Password" id="password">
          Password
          <input type="password" />
        </label>
      </div>
      <div className="inline field">
        <div className="ui checkbox">
          <label htmlFor="terms" id="terms">
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
      </div>
      <div className="ui blue submit button">Submit</div>
    </form>
    <div className="ui bottom attached warning message">
      <i className="icon help" />
      Already signed up? <a href="/">Login here</a> instead.
    </div>
  </div>
);

export default Form;
