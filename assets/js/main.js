function getUsers() {
    fetch('/api/musicians')
        .then(response => response.json())
        .then(users => {
            console.log(users)
        })
}

getUsers()