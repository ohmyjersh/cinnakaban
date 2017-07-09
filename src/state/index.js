const initialState = {
    dashboard: {
        title: '',
        description: '',
        lanes: [{
            title: 'todo',
            description: ''
        },
        {
            title: 'in progress',
            description: ''
        },
        {
            title: 'done',
            description: ''
        }],
        cards: [{
            title: '',
            description: ''
        }]
    }
}

export const reducer = (state = initialState, action) => {
    let {
        type,
        payload
    } = action;
    switch (type) {
        default: return state;
    }
}

export const actionCreators = () => {

}