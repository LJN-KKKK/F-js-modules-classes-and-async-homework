export const getPoetry = () => {
    return fetch('https://v1.jinrishici.com/all.json',{
        method: "GET"
    }).then((data) => {
        return data.json()
    }).then((data) => {
        return [data.origin, data.author, data.content]
    }).catch(error => {
        error.message
    })
}

// export const getPoetry = () => {
//     return fetch('https://v1.jinrishici.com/all.json',{
//         method: "GET"
//     }).then((data) => {
//         let res = JSON.stringify(data)
//         return [res.origin, res.author, res.content]
//     }).catch(error => {
//         error.message
//     })
// }