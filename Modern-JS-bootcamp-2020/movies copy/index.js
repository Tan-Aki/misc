const fetchData = async (searchTerm) => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'ee4feb1e',
			s: searchTerm
		}
	});
	if (response.data.Error) {
		return [];
	}
	return response.data.Search;
};

const input = document.querySelector('input');

let timeoutId;

const debounce = (event, cb, delay = 1000) => {
	if (timeoutId) clearTimeout(timeoutId);
	timeoutId = setTimeout(() => cb(event), delay);
};

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);
	console.log(movies);
	for (let movie of movies) {
		const div = document.createElement('div');
		div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `;
		document.querySelector('#target').appendChild(div);
	}
};

input.addEventListener('input', (event) => debounce(event, onInput, 1000));
// input.addEventListener('input', (event) => {
// 	if (timeoutId) clearTimeout(timeoutId);
// 	timeoutId = setTimeout(() => onInput(event), 1000);
// });

// console.log(event.target.value); // event.target.value Basically it retrieves value of whatever input it was called on.
