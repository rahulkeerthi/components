import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// const authors = [
//     "Sam",
//     "Jane",
//     "Ali"
// ]

const App = () => {
    return (
			<div className="ui container comments">
                <ApprovalCard>
                    <h2>WARNING</h2>
                    <div>
                        Are you sure you want to do this?
                    </div>
                </ApprovalCard>
				<ApprovalCard>
                    <CommentDetail
                        author="Sam"
                        timeAgo="Today at 4:45PM"
                        content={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
				<ApprovalCard>
                    <CommentDetail
                        author="Jane"
                        timeAgo="Today at 6:08AM"
                        content={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                    />
				</ApprovalCard>
				<ApprovalCard>
                    <CommentDetail
                        author="Ali"
                        timeAgo="Yesterday at 9:23PM"
                        content={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
			</div>
		);
};

ReactDOM.render(<App />, document.querySelector("#root"));
