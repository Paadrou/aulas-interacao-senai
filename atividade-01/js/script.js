fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => console.log(posts))
.then(posts =>{
    posts.map(post => console.log)
})