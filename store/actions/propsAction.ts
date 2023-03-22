import { GET_PROPS, GET_ERROR } from '../types'
import axios from 'axios'

export const getProps = (value: string) => async (dispatch: any): Promise<void> => {

    try {
        // const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: GET_PROPS,
            payload: [{
                props: value
            }]
        })
    }
    catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error,
        })
    }

}