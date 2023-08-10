import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';

const ComponentDetail = (props) => {
  const randomAvatar = faker.internet.avatar();
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={randomAvatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.commentText}</div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;