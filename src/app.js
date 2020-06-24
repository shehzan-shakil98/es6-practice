//*************************AJAX (Asynchronous javascript and xml)*********************** */

//************************hOW to handle xmlhttp request*********** */

// const xhr = new XMLHttpRequest()
// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState==4){
//         if(xhr.status==200){
//             let users = JSON.parse(xhr.response)  //convert json string to js object
//             console.log(users)
//         } else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

//********** 

// function getRequest(url,callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open('get',url)


    
// xhr.onreadystatechange = function(e){
//     if(xhr.readyState==4){
//         if(xhr.status==200){
//             let response = JSON.parse(xhr.response)  //convert json string to js object
//             callback(null,response)
//         } else{
//             callback(xhr.status,null)
//         }
//     }
// }

// xhr.send()

// }

// getRequest('https://jsonplaceholder.typicode.com/users',(err,resp)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(resp)
//     }
// })


// getRequest('https://jsonplaceholder.typicode.com/posts',(err,resp)=>{
//     if(err){
//         console.log(err)
//     }else{
//         resp.forEach(t => {
//             console.log(t.title)   //fetch only post title
//         });
//     }
// })

//####################################################################//#endregion

//********************************Promise*************************** */

// function getIphone(isPassed){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             if(isPassed){
//                 resolve('I have Got an iphone')
//             }else {
//                 reject(new Error('you have failed'))
//             }
//          },2000)
//     })
// }

// getIphone(true).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e)
// })


//#########################################################################//#endregion

//**************************Fetch api**************************************** */

//fetch api basically return e promise

const BASE_URL= 'https://jsonplaceholder.typicode.com'

// fetch (`${BASE_URL}/users/1`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     return Promise.resolve('something')
// })
// .then(str=>{
//     console.log(str)
// })
// .catch(e=>{
//     console.log(e)
// })

//############################################################################//#endregion

//*********************make my custom getRequest method like fetch api********** */



    function getRequest(url){
        return new Promise((resolve,reject)=>{
            
                    const xhr = new XMLHttpRequest()
                    xhr.open('get',url)
                                  
                xhr.onreadystatechange = function(e){
                    if(xhr.readyState==4){
                        if(xhr.status==200){
                            let response = JSON.parse(xhr.response)  //convert json string to js object
                            resolve(response)
                        } else{
                            reject(new Error('error occurred'))
                        }
                    }
                }
                
                xhr.send()
            }   
        )
    }

    getRequest(`${BASE_URL}/users/1`)
    .then(data=>{
        console.log(data)
    })
    .catch(e=>{
        console.log(e)
    })