const heartBtn = document.querySelector('#heart-icon');
const postBtn = document.getElementById('post-img')
const likeCount = document.querySelector('#like-count');

let newLikeCount = Number((likeCount.textContent).replace(/,/g, ''));

postBtn.addEventListener('dblclick', function() {
    newLikeCount++
    likeCount.textContent = newLikeCount.toLocaleString()
})

heartBtn.addEventListener('dblclick', function() {
    newLikeCount++
    likeCount.textContent = newLikeCount.toLocaleString()
})

    