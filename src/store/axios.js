const APIURL = "http://laraveltest.test/api/"
const axios = require('axios').default;

async function register(payload){
    return await axios.post(APIURL + 'register',{
        ...payload
    }).catch(e=>{throw (e)})
}

async function login(payload){
    return await axios.post(APIURL + 'login',{
        ...payload
    }).catch(e=>{throw (e)})
}

async function logout(token){
    return await axios.post(APIURL + 'logout',{},{headers:{
        'Authorization':'Bearer '+ token
    }}
    ).catch(e=>{throw (e)})
}

async function getHabitaciones(token){
    return await axios({ method: 'get', url: APIURL + 'getuserrooms', headers: {
         'Authorization': 'Bearer ' + token } }
    ).catch(e=>{throw (e)})
}

export {register,login,logout,getHabitaciones}