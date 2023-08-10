import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import SeasonDisplay from './SeasonDisplay';
import './style.css';

const App = () => {
  return (
    <div className='centered-content ui container comments'>
      <div>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to delete this comment?
          <CommentDetail author='Sam' timeAgo='Today at 4:45PM' commentText='This is a great comment!' avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Alex' timeAgo='Today at 8:00AM' commentText='Great article!' avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='John' timeAgo='Today at 6:00AM' commentText='Hello' avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'/>
      </ApprovalCard>
      <SeasonDisplay></SeasonDisplay>
      </div>
    </div>
  );
};

window.navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);

ReactDOM.render(<App />, document.getElementById('root'));