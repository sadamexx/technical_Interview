

//failed attempts at async await

// useEffect(() => {
//     (async () => {
//         const newData = await getData();
//         setCurrentUser(newData);
//     })();
// }, [])

// const fetchData = async () => {
//    const data = await getData()
//    setCurrentUser(data)
// }

// useEffect(() =>{
//    fetchData();
// },[])

// useEffect(async() => {
//     try{
//         const res = await axiosWithAuth().get('/api/v2/currentuser')
//         setCurrentUser(res)
//     } catch(err){
//         console.log("Current user Eror", err)
//     }
// })

// async function getData(){
//     const response = await axiosWithAuth().get('/api/v2/currentuser')
//     .then(promise => {
//         return promise.data
//     })
//     .catch(err => {
//         console.log("Current User Error", err)
//     })
//     return response;
// }