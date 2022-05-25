import tokenService from './tokenService';

const BASE_URL = '/api/suspects';

export function create(suspect) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: suspect,
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    
    }).then(res => res.json());
  }

  export function getAll() {
	  return fetch(BASE_URL, {
		  headers: {
			  Authorization: "Bearer " + tokenService.getToken(),
		  },
	  }).then((res) => res.json());
  }