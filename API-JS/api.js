const user = {
    id: 11,
    name: 'Mamun',
    friends: ['Mausd', 'Manik', 'Mabul'],
    lover: {
        name: 'Mamila',
        favFood: 'pizza'
    }
};
const userJSON = JSON.stringify(user);
// console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
// console.log(userFromJSON);


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => displayUser(json))
//     .catch(error => console.log(error));

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const postBody = document.getElementById("post-body").value;
    const post = { title: title, body: postBody };
    postToServer(post);
})

function postToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(alert("Please! try again later."));
}

function displayUser(users) {
    const userNames = users.map(username => username.username);
    const ul = document.getElementById("users-container");
    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement("li");
        li.innerText = username;
        ul.appendChild(li);
        ul.classList.add("li-style");
    }
}