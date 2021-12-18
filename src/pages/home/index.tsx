import { useEffect,useState } from "react";
import API from '../../service/API'
import notice from "../../types/notice";
import Notices from "../../components/notices";
import * as S from './style';
const Home = ()=>{

    const [notices,setNotices] = useState<notice[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getNotices();
    },[])

    const getNotices = async()=>{
        let json = await API.getAllNotices();
        setNotices(json.articles);
        setLoading(false);
    }

    return(
        <S.HomeContainer>
            {!!loading?
             <h1>Aguarde...</h1>
              : notices.map((item,index)=>(
                <Notices id = {index} key = {index} data = {item}/>
            ))}
        </S.HomeContainer>
    )
}
export default Home;