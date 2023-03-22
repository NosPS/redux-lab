import { GET_PROPS, GET_ERROR } from '../types'

interface propsState {
    props: string[],
    loading: boolean
}

const initialState: propsState = {
    props: [],
    loading: true
}

export default function (state = initialState, action: any) {

    switch (action.type) {

        case GET_PROPS:
            console.log(state.props);

            return {
                ...state,
                props: action.payload,
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