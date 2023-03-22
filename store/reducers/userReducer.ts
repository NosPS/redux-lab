import { GET_USERS, GET_ERROR } from '../types'

interface usersState {
    users: string[],
    loading: boolean
}

const initialState: usersState = {
    users: [],
    loading: true
}

export default function (state = initialState, action: any) {

    switch (action.type) {

        case GET_USERS:
            console.log(state.users);

            return {
                ...state,
                users: action.payload,
                loading: false

            }
        case GET_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }

}