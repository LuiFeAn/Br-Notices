import * as S from './style'
import {useParams} from 'react-router-dom'
import Notice from '../../components/notice'
import API from '../../service/API'
import { useEffect, useState } from 'react'
import notice from '../../types/notice'

export const NoticePage = ()=>{
    const parm = useParams();

    const [notice,setNotice] = useState<notice[]>();

    useEffect(()=>{
        if(parm.id){
            getOneNotice(parm.id);
        }
    })

    const getOneNotice = async(id:string)=>{
        let json = await API.getAllNotices();
        let element = parseInt(id);
        let newArr = json.articles.slice(element,element+1);
        setNotice(newArr);

    }
    return(
        <S.NoticeContainer>
            {notice?.map((item)=><Notice obj={item}/>)}
        </S.NoticeContainer>
    )
}
export default NoticePage;