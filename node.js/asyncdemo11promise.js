
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

const getAllUsers = ()=>{
  const promise =  Promise.allSettled(userUrls.map(fetchUser))
  console.log(`Promise ${promise}`)
  promise.then(result => {console.log(result)})
.catch(reason => {console.error(reason)})
}

getAllUsers()