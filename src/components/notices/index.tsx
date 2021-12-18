import * as S from './style';
import notice from '../../types/notice'
import {useNavigate} from 'react-router-dom'

type Props = {
    data:notice,
    id:number,
}

const Notices = (props:Props)=>{

    const Nav = useNavigate();

    const handleClickNotice = ()=>{
        Nav(`noticia/${props.id}`)
    }

    return(
        <S.NoticeContainer>
            <S.NoticeImg src = {props.data.urlToImage}/>
            <div className='text-container'>
                <S.NoticeTitle onClick={handleClickNotice}>
                    {props.data.title}
                </S.NoticeTitle>
                <S.NoticeDescription>
                    {props.data.description}
                </S.NoticeDescription>
            </div>
        </S.NoticeContainer>
    )
}
export default Notices;