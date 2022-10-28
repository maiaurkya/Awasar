export const resetCourseData = (name)=>{
        return {
                type:'COURSE_DATA',
                payload:[]
        }
}
export const updateSliderCount = (count)=>{
	return {
		type: 'SLIDER_COUNT',
		payload: count
	}
}
export const getCourseList = ()=>{
        return (dispatch, getState)=>{	
                fetch('http://192.168.253.128:4000/courses/course-list')
                .then(res=>res.json())
                .then(res2=>{
			const courseData = [];
			res2.map((val, ind)=>{
				courseData[val.id] = res2[ind];
			});
                        dispatch({type:'COURSE_DATA',payload: courseData})
                })
        }
}
export const getTopicList = (topic_id) =>{
	return (dispatch)=>{
		fetch('http://192.168.253.128:4000/courses/topic-details/'+topic_id)
                .then(res3=>res3.json())
                .then(res4=>{
                        dispatch({type:'TOPIC_DATA',payload: res4})
                })
	}

}

export const createEnquiry = (enquiryData) => {
	 return{
		enquiryData
		type: 'CREATE_ENQUIRY'
	 }
};
