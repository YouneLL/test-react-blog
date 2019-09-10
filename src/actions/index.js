import jsonPlaceholder from '../api/jsonPlaceholder';
import { FETCH_POSTS, SELECT_POST, RESET_POST, FETCH_COMMENTS, ADD_POST } from '../constants/actionTypes';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: FETCH_POSTS, posts: response.data });
}

export const selectPost = (postId) => async (dispatch, getState) => {
  const selectedPost = getState().data.posts.find(post => post.id === postId);

  dispatch({ type: SELECT_POST, selectedPost });
}

export const fetchComments = (postId) => async (dispatch) => {
  const response = await jsonPlaceholder.get('/comments', { params: { postId } });

  dispatch({ type: FETCH_COMMENTS, comments: response.data });
}

export const resetPost = () => ({ type: RESET_POST });

export const addPost = (post) => async (dispatch) => {
  const response = await jsonPlaceholder.post('/posts', post);

  dispatch({ type: ADD_POST, post: response.data });
}
