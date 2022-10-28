const iState = {
	name: 'Chandan',
	wishes: ['eat','code'],
	courseList:[],
	currentCount : 0,
	topicList: [],
	formTitle: 'Fill to get the Scholarship!'
}

const reducer = (state=iState, action) =>{
	if(action.type === 'COURSE_DATA'){
                return{
                        ...state,
                        courseList: action.payload
                }
        }
	if(action.type === 'RESET_COURSE_DATA'){
		return{
			...state,
			courseList: [action.payload]
		}
	}
	 if(action.type === 'SLIDER_COUNT'){
		return {
			...state,
			currentCount: action.payload
		}
	}if (action.type === 'TOPIC_DATA'){
		console.log(iState, action);
		return{
			...state,
			topicList : action.payload
		}
	}
	
	return state;
}

export default reducer;
