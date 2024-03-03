const posts = async ()=>{
    const response =await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const postData = data.posts;
    const post = document.getElementById('post');
    postData.forEach((item)=>{
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex gap-4 border-1 bg-[#f3f3f5] rounded-2xl w-full p-8 mb-5">
        <div class="relative mt-2">
            <img src="${item.image}" class="w-16 h-16 rounded-xl">
            <img src="images/Status.png" class="absolute top-0 right-0 translate-x-2 -translate-y-2 w-5 h-5">
        </div>
        <div class="mb-3">
            <div class="flex gap-3 mb-2">
                <p>#${item.category}</p>
                <p>Author: ${item.author.name}</p>
            </div>
            <h1 class="font-bold mb-2">${item.title}</h1>
            <p class="mb-2">${item.description}</p>
            <hr>
            <div class="flex justify-between w-96 pt-4">
                <div class="flex justify-center items-center gap-4">
                    <div class="flex gap-2 text-base">
                        <img src="images/message.png" alt="">
                        <p>${item.comment_count}</p>
                    </div>
                    <div class="flex gap-2 text-base">
                        <img src="images/Eye.png" alt="">
                        <p>${item.view_count}</p>
                    </div>
                    <div class="flex gap-2 text-base">
                        <img src="images/time.png" alt="">
                        <p>${item.posted_time} min</p>
                    </div>
                </div id ="message">
                   <button onclick="showInbox('${item.title}','${item.view_count}')"><img src="images/inbox.png" alt=""></button>
                </div>
        </div>
    </div>`
    post.appendChild(div);
    })
}
posts();
const message = document.getElementById('message');
const inbox = document.getElementById('inbox');
const readMsg = document.getElementById('read-msg');
let markMsg = 0;
const showInbox = (item1,item2)=>{
   const div = document.createElement('div');
   div.innerHTML = `<div class="card w-10/12 mx-auto bg-base-100 shadow-2xl p-3 mt-5">
                    <div class="flex justify-center items-center gap-4 p-2">
                        <p class="font-bold">${item1}</p>
                        <div class="flex gap-4 justify-center items-center">
                        <img src="images/Eye.png" alt="">
                        <p>${item2}</p>
                        </div>
                    </div>
                </div>`
   inbox.appendChild(div);
   markMsg++; 
   readMsg.innerHTML = markMsg;
    
}
