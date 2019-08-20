import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Form from './Form';
import TestCard from './TestCard';
import './App.css';

const App = () => (
  <div className="ui raised very padded text container segment">
    <div className="ui centered header">Practice with UI</div>
    <div className="ui container">
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={faker.date.weekday()}
            content={faker.lorem.sentence()}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={faker.name.firstName()}
            timeAgo={faker.date.weekday()}
            content={faker.lorem.sentence()}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <TestCard
          authorFirst={faker.name.firstName()}
          authorLast={faker.name.lastName()}
          timeAgo={faker.date.weekday()}
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          jobTitle={faker.name.jobTitle()}
          email={faker.internet.email()}
        />
        <TestCard
          authorFirst={faker.name.firstName()}
          authorLast={faker.name.lastName()}
          timeAgo={faker.date.weekday()}
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
          jobTitle={faker.name.jobTitle()}
          email={faker.internet.email()}
        />
        <Form />
      </div>
    </div>
  </div>
);

export default App;
