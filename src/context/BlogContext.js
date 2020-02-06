import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'add_blogpost':
            console.log(action.payload);
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }]
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content) => {
        dispatch({type: 'add_blogpost', payload: {title, content}})
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        //dispatch({ thingToDo: 'delete_blogpost', idofPostToDelete: id })
        dispatch({ type: 'delete_blogpost' })
    };
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost}, 
    []
);