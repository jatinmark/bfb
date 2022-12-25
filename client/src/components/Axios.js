import axios from "axios";

//   https://crud-backend-l5bq.onrender.com

export const newMessage = async (data) => {
    try {
      await axios.post(`https://4000-jatinmark-crudapp-e4l2b5afxot.ws-us80.gitpod.io/user`, data);
    } catch (error) {
        console.log('Error while calling newMessage API ', error);
    }
}

export const getmessages = async ()=>{
  try{
      let response = await axios.get(`https://4000-jatinmark-crudapp-e4l2b5afxot.ws-us80.gitpod.io/data`);
      console.log(response);
      return response.data ;
  }catch(error){
      console.log('error while calling getmessages' , error.message);
}
}