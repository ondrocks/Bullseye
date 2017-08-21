import axios from 'axios';

const GET_THREADS = 'GET_THREADS';
const MAKE_THREAD = 'MAKE_THREAD';
const UPVOTE = 'UPVOTE';

const getThreads = (threadList) => ({
  type: GET_THREADS,
  threadList,
});

const makeThread = (threadObj) => ({
  type: MAKE_THREAD,
  threadObj
})

const upvote = (threadObj) => ({
  type: UPVOTE,
  threadObj
})

export const fetchThreads = () => dispatch => {
 axios.get('/api/threads')
    .then(res => res.data)
    .then(threads => dispatch(getThreads(threads)));
};

export const postThread = (threadObj) => dispatch => {
  axios.post('/api/threads', threadObj)
  .then(res=>res.data)
  .then(newThreadObj => dispatch(makeThread(newThreadObj)))
};

export const upvoteThread = (threadObj) => dispatch => {
  axios.put('/api/threads', threadObj)
  .then(res=>res.data)
  .then(updatedThreadObj => dispatch(upvote(updatedThreadObj)))
}

function threadReducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threadList;
    case MAKE_THREAD:
      return threads.concat([action.threadObj])
    case UPVOTE:
      return threads.map(thread=>(
        action.threadObj.id === thread.id ? action.threadObj : thread
      ))
    default:
      return threads;
  }
}

export default threadReducer;
