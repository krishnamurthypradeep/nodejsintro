
const userUrls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/userhhhs/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4"
]
const fetchUser = url =>  fetch(url).then(response =>{
if(!response.ok){
    throw new Error(`Failed to fetch url ${url}`)
}
return response.json()
} )

const getAllUsers = async ()=>{
  try {
    const users = await Promise.allSettled(userUrls.map(fetchUser))
    console.log(users)
  } catch (error) {
    console.error(`Failed to Fetch ${error.message}`)
  }
  

  // console.log(`Promise ${promise}`)
//   promise.then(result => {console.log(result)})
// .catch(reason => {console.error(reason)})
}

getAllUsers()

// Node.JS
// Option1: ES2015 -> ES2022 Module System
// Option2: node.js require (commonjs)

// import  export
// require() module.exports