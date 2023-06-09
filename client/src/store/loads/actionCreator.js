import {
	ADD_LOAD_REQUEST,
	GET_ACTIVE_LOADS_REQUEST,
	GET_ACTIVE_LOADS_SUCCESS,
	GET_LOADS_REQUEST,
	GET_LOADS_SUCCESS,
	ITERATE_TO_NEXT_STATE_REQUEST,
	EDIT_LOAD_REQUEST,
	DELETE_LOAD_REQUEST,
	DELETE_LOAD_SUCCESS,
	POST_LOAD_REQUEST,
	GET_SHIPP_INFO_REQUEST,
	GET_SHIPP_INFO_SUCCESS,
} from './actionTypes';

export const getLoadsRequest = (payload) => ({
	type: GET_LOADS_REQUEST,
	payload,
});

export const getLoadsSuccess = (payload) => ({
	type: GET_LOADS_SUCCESS,
	payload,
});

export const addLoadRequest = (payload) => ({
	type: ADD_LOAD_REQUEST,
	payload,
});

export const editLoadRequest = (payload) => ({
	type: EDIT_LOAD_REQUEST,
	payload,
});

export const deleteLoadRequest = (payload) => ({
	type: DELETE_LOAD_REQUEST,
	payload,
});

export const deleteLoadSuccess = (payload) => ({
	type: DELETE_LOAD_SUCCESS,
	payload,
});

export const postLoadRequest = (payload) => ({
	type: POST_LOAD_REQUEST,
	payload,
});

export const getShippInfoRequest = (payload) => ({
	type: GET_SHIPP_INFO_REQUEST,
	payload,
});

export const getShippInfoSuccess = (payload) => ({
	type: GET_SHIPP_INFO_SUCCESS,
	payload,
});

export const getActiveLoadsRequest = (payload) => ({
	type: GET_ACTIVE_LOADS_REQUEST,
	payload,
});

export const getActiveLoadsSuccess = (payload) => ({
	type: GET_ACTIVE_LOADS_SUCCESS,
	payload,
});

export const iterateToNextStateRequest = (payload) => ({
	type: ITERATE_TO_NEXT_STATE_REQUEST,
	payload,
});
