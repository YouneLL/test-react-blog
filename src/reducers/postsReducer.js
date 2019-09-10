import { FETCH_POSTS, SELECT_POST, FETCH_COMMENTS, RESET_POST, ADD_POST } from '../constants/actionTypes';

const initialState = {
  posts: [],
  selectedPost: null,
  comments: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.posts };
    case FETCH_COMMENTS:
      return { ...state, comments: action.comments };
    case SELECT_POST:
      return { ...state, selectedPost: action.selectedPost };
    case RESET_POST:
      return { ...state, selectedPost: null };
    case ADD_POST:
      return { ...state, posts: [ ...state.posts, action.post ] };
    default:
      return state;
  }
}
