// Add your code here
const body = document.querySelector('body')

const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email,
    })
    
})
.then(res => res.json())
    .then(userInfo => {
        body.innerHTML = userInfo.id
    })
    .catch(error => {
        body.innerHTML = error.message
    } )
}
