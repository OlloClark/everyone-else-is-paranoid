import tokenService from "./tokenService"

const BASE_URL = '/api'

export function create(suspectId){
	return fetch(`${BASE_URL}/suspects/${suspectId}/snoops`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		
		if(res.ok) {
			console.log("res is okay")
			return res.json()
		}
		throw new Error('create snoop error: res not ok')
	})
}

export function removeSnoop(snoopId){
	return fetch(`${BASE_URL}/snoops/${snoopId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		console.log("fetching correctly for delete snoop")
		if(res.ok) return res.json()
		throw new Error('delete snoop error: Not logged In! Check Express terminal')
	})
}