export const exerciseOptions = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
	}
}

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'e23fa7b297mshbac68eb7232495ap195a63jsn7c3c1b27bdab',
		'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY
	}
};

export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const data = await response.json()

     return data
}

