import React from 'react';
import PropTypes from 'prop-types';

const TestCard = ({
  authorFirst,
  authorLast,
  avatar,
  content,
  email,
  jobTitle,
}) => (
  <div className="ui segment">
    <div className="ui centered card">
      <div className="image">
        <img alt="avatar" src={avatar} />
      </div>
      <div className="content">
        <div className="header">
          {authorFirst} {authorLast}
        </div>
        <i className="right floated like icon" />
        <i className="right floated star icon" />
      </div>
      <div className="description">{jobTitle}</div>

      <div className="extra content">{content}</div>
      <a className="extra content">{email}</a>
      <div className="ui bottom attached button">
        <i className="add icon" />
        Add Friend
      </div>
    </div>
  </div>
);

TestCard.propTypes = {
  authorFirst: PropTypes.string,
  authorLast: PropTypes.string,
  content: PropTypes.string,
  avatar: PropTypes.string,
  jobTitle: PropTypes.string,
  email: PropTypes.string,
};

export default TestCard;
