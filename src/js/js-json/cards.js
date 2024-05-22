import data from "../data.json" assert {type: 'json'};

const btn = document.querySelector('#showNext');
const blogposts = document.querySelector('#portfolio-cards');

if (btn && blogposts) 
{
	const loadMore = addMorePosts()
	btn.addEventListener('click', () =>{blogposts.innerHTML = ''; loadMore()});
	loadMore(true);
}

function getBlogPosts(limit, page, reverse) {
	console.log(limit, page, reverse)
	// If no limit or page return all data
	if(limit === undefined || page === undefined) {
		return reverse ? data.slice().reverse() : data.slice();
	}

	// If there is a limit and page args
	const list = reverse ? data.slice().reverse() : data.slice();

	return list.slice(
		Math.min(page * limit, data.length - 1),
		Math.min((page + 1) * limit, data.length));
}

function createCardsHTML(cardsDataArr) {
	if (!cardsDataArr instanceof Array) {
		console.error('Wrong cards data!')
		return;
	}

	return cardsDataArr.map(({ 
		id,
		hrefCard,
		hrefAuthor,
		imgSrc,
		imgAlt,
		cardTitle,
		cardAuthor,
		cardDate }) => `
			<!-- single news card -->
		   		<a href="./img/portfolio/photo${imgSrc}.webp" data-fancybox ="our-works" class="portfolio-item")>
					<img class="lazy" src="./img/portfolio/photo${imgSrc}.webp", alt="img")>
				</a>
	
	`).join('');
}


function addMorePosts() {
	const limit = 8;
	let page = 0;
	const lastPage = Math.ceil(data.length / limit);
	return (limited) => {
		// const newPosts = getBlogPosts(limit, page);
		console.log(limited);
		const newPosts = limited ? getBlogPosts(limit, page) : getBlogPosts();
		console.log(newPosts);
		blogposts.innerHTML += createCardsHTML(newPosts);

		page++;
		
		if (page === lastPage) {
			btn.style.display = 'block';
		}
	};
}

