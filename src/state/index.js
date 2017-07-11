const initialState = {
    dashboard: {
        title: '',
        description: '',
        lanes: [{
            id:'1',
            title: 'todo',
            description: ''
        },
        {
            id:'2',
            title: 'in progress',
            description: ''
        },
        {
            id:'3',
            title: 'done',
            description: ''
        }],
        cards: [{
            laneId:'1',
            title: 'card1',
            description: 'cards'
        },
        {
            laneId:'2',
            title: 'card2',
            description: 'cardsssss'
        },
        {
            laneId:'3',
            title: 'card4',
            description: 'carddsss'
        },
        {
            laneId:'2',
            title: 'cards5',
            description: 'asdfdsf'
        },
        {
            laneId:'1',
            title: 'cards6',
            description: 'asdfasdfsadf'
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

const createAction = (type, payload) => {type,payload}

	// pushCard(card) {
	// 	this.setState(update(this.state, {
	// 		cards: {
	// 			$push: [ card ]
	// 		}
	// 	}));
	// }

	// removeCard(index) {		
	// 	this.setState(update(this.state, {
	// 		cards: {
	// 			$splice: [
	// 				[index, 1]
	// 			]
	// 		}
	// 	}));
	// }

	// moveCard(dragIndex, hoverIndex) {
	// 	const { cards } = this.state;		
	// 	const dragCard = cards[dragIndex];

	// 	this.setState(update(this.state, {
	// 		cards: {
	// 			$splice: [
	// 				[dragIndex, 1],
	// 				[hoverIndex, 0, dragCard]
	// 			]
	// 		}
	// 	}));
	// }

export const actionCreators = () => ({
    removeCard : () => {

    },
    addCard : () => {

    },
    moveCard : () =>{

    }
})