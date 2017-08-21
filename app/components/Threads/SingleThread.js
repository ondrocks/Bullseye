import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { upvoteThread } from '../../reducers/thread-reducer';
import Comments from './Comments'
import AddComment from './AddComment'

const SingleThread = props => {
	
	const thread = props.thread;
	const upvoteHandler = () => {
		thread.score = thread.score + 1;
		console.log(thread)
		props.upvote(thread)
	}
	
	return (
		<div>
			<Row>
				<Col l={3} offset='l9'>
					<Button onClick={upvoteHandler}> Upvote </Button>
				</Col>
			</Row>
			<Row> <b> Description: </b> </Row>
			<Row> {thread.description} </Row>
			<Row> <b> Comments: </b> </Row>
			<Row> <Comments thread={thread}/> </Row>
			<Row> <AddComment thread={thread}/> </Row>

		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	upvote: (threadObj) => dispatch(upvoteThread(threadObj))
})

export default connect(null, mapDispatchToProps)(SingleThread);