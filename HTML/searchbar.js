const toggleButton = document.getElementsByClassName('toggle-button')[0]
const topNav = document.getElementsByClassName('top-nav')[0]
const search = document.getElementsByClassName('search-box')[0]


toggleButton.addEventListener('click',()=> {
    topNav.classList.toggle('active')
    if (search.style.display != 'none')
        search.style.display = 'none'
    else {
        search.style.display = 'block' 
    }
})