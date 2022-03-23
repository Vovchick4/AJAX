'use strict'

const content = document.getElementsByClassName("content_users")[0]

function fetchAllUsers() {
    fetch("http://127.0.0.1:3000/users",
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
            res.json().then((res) => genereteList(res))
        })
        .catch((error) => console.log(error.message))
}

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