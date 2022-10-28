const baseUrl = 'http://localhost:3001/';
const enquiryFormSucessMsg = {
	sucessTitle: 'Congratulations!',
	sucessBody: 'You have successfuly applied for the scholarship.',
	existingTitle: 'We have already got a Similar Request',
	existingBody: 'Please try with different Mobile Number or email.',
	errorTitle: 'Woops Something wrong',
	errorBody: 'Please try after sometie. We are fixing it.',
}
const status ={
	success: 'success',
	exist: 'exist',
	error: 'error'
}

export {
  	baseUrl,
	enquiryFormSucessMsg,
	status,
};