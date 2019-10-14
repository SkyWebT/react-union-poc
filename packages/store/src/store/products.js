const init = {
	'1': {
		id: '1',
		name: 'SKY Starter',
		price: 25,
		selected: false,
	},
	'2': {
		id: '2',
		name: 'SKY Entertainment',
		price: 35,
		selected: false,
	},
	'3': {
		id: '3',
		name: 'SKY Sport',
		price: 99,
		selected: false,
	},
};

function products(state = init, action) {
	switch (action.type) {
		case 'TOGGLE':
			const { id } = action.payload;
			return {
				...state,
				[id]: { ...state[id], selected: !state[id].selected },
			};
		default:
			return state;
	}
}
export default products;
