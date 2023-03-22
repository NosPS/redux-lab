import { GET_USERS, GET_ERROR } from '../types'
import axios from 'axios'

export const getUsers = () => async (dispatch: any): Promise<void> => {

    try {
        const res = await axios.get(`/user-api/users`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }

}

export const setUsers = () => async (dispatch: any): Promise<void> => {

    dispatch({
        type: GET_USERS,
        payload: [{
            id: 1,
            name: "test1"
        }, {
            id: 2,
            name: "test2"
        }]
    })

}