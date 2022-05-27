export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const loading = ()=>({
    type:LOADING
})

export const success = (payload)=>({
    type:SUCCESS,
    payload
})

export const send_error = ()=>({
    type:ERROR
})

export const sendMessage = ({email, subject, message})=>(dispatch)=>{
    dispatch(loading())
        fetch(`https://anoxco0.herokuapp.com/users`,{mode:'cors'},{
          method:"post",
          body:JSON.stringify({
              email:email,
              subject:subject,
              message:message
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>{dispatch(success({message:res.message})); alert(res.message)})
        .catch(error=>dispatch(send_error()))
}
