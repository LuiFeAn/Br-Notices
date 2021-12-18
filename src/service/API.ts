import axios from 'axios'

const baseEndPoint = "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=32ac88aad7c840a5b103d9c566def39e"

const API = {
    getAllNotices:async()=>{
        try{
            let req = await axios.get(`${baseEndPoint}`);
            let json = req.data;
            return json;
        }catch(err){
            alert(err);
        }
    }
}
export default API;