'use strict'

const content = document.getElementsByClassName("content_users")[0]

const users = [
    {
        "id": 1,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "photo": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 2,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "photo": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 3,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "photo": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 4,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "photo": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 5,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "photo": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 6,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "photo": "https://reqres.in/img/faces/12-image.jpg"
    }
]

function fetchAllUsers() {
    fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits",
        {
            method: "GET",
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     "content-type": "text/html",
            //     "cache-control": "no-cache, no-store",
            //     "content-length": 212,
            //     "x-iinfo": "7-38432735-0 0NNN RT(1647961160933 0) q(0 -1 -1 -1) r(0 -1) B10(4,314,0) U5",
            //     "strict-transport-security": "max-age=31536000; includeSubDomains; preload"
            // },
            // redirect: "follow",
            // referrerPolicy: 'origin'
        }
    )
        .then((res) => {
            // res.json().then((res) => console.log(res))
            console.log(res.json())
            genereteList(response.json())
        })
        .catch((error) => console.log(error.message))
}

genereteList(users)
function genereteList(mas) {
    let str = ``;
    mas.map((item) => (
        str += `
        <div class="content_list" id="content_list" name="content_list">
          <div class="list_body">
            <p class="text-list" style="font-size: 16px; font-weight: 800; margin: 0">User id: ${item.id}</p>
            <p class="text-list" style="font-size: 16px; font-weight: 800; margin: 0">${item.first_name}</p>
            <p class="text-list" style="font-size: 16px; font-weight: 800; margin: 0">${item.last_name}</p>
            <p class="text-list" style="font-size: 16px; font-weight: 800; margin: 0">${item.email}</p>
          </div>
          <img class="list_img" src=${item.photo} alt=${item.last_name + ' ' + item.first_name}>
        </div>
      `
    ))
    return (content.innerHTML = str)
}