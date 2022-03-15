import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Are you sure you want to delete these comments?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Bob"
          time="16:41 PM"
          content="Hey, sup gang"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Matt"
          time="16:44 PM"
          content="Whaaatupppp"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Sarah"
          time="17:55 PM"
          content="How's it hangin'?"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Dylan"
          time="22:20 PM"
          content="Ya'll still here?"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Nicky"
          time="01:24 AM"
          content="Noone here..."
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
