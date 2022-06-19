import {register,login,logout,getHabitaciones} from '../axios'

export default{
    namespaced:true,
    state:{
        curUser:{
        },
        token:'',
        userType:'',
        userRooms:[]
    },
    mutations:{
        asignarUser(state,payload){
            state.curUser = payload.user
            state.token = payload.token
            state.userType = payload.userType
            localStorage.setItem('userdata',JSON.stringify({
                'curUser':state.curUser,
                'token':state.token,
                'userType':state.userType}))
        },
        cargarStorage(state){
            let data = localStorage.getItem('userdata')
            if (data !== null){
                data = JSON.parse(data)
                state.curUser = data.curUser
                state.token = data.token
                state.userType = data.userType
            }
        },
        delUser(state){
            state.curUser = {}
            state.token = ''
            state.userType = ''
            localStorage.clear()
        },
        asignarRoom(state,payload){
            state.userRooms = payload
        }
    },
    actions:{
        async registro({commit},payload){
            try{
                let peticion = await register(payload)
                commit('asignarUser',peticion.data)
            }
            catch(e){
                console.log(e)
                throw(e)
            }
        },async loguser({commit},payload){
            try{
                let peticion = await login(payload)
                commit('asignarUser',peticion.data)
            }
            catch(e){
                console.log(e)
                throw(e)
            }
        },
        async logout({commit,state}){
            let token = state.token
            commit('delUser')
            try{
                await logout(token)
            }
            catch(e){
                console.log(e)
                throw(e)
            }
        },
        async getUserRooms({commit,state}){
            try{
                let peticion = await getHabitaciones(state.token)
                commit('asignarRoom',peticion.data)
            }
            catch(e){
                console.log(e)
                throw(e)
            }
        }
    },
    getters:{
        getUserData(state){
            return (state.userType)?{...state.curUser,'userType':state.userType}:{}
        },
        
        getRooms(state){
            return state.userRooms
        }
    }
}