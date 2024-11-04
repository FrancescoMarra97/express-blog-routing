const posts = require('../db/db.js')

const index = (req, res) => {
	let html = '<ul>'
	posts.forEach((post) => {
		html += `
		<li>
			<h2>${post.title}</h2>
            <img src="/imgs/posts/${post.image}" alt="${post.title}">
            <p>${post.content}</p>           
            ${post.tags.join(', ')}
		</li>
		`
	})
	html += '</ul>'
	res.send(html)
}
