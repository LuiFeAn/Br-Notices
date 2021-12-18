import * as S from './style';
import notice from '../../types/notice'

type Props = {
    obj:notice,
}

const Notice = (props:Props)=>{

    return(
       <S.NoticeContainer>
            <S.NoticeImg src = {props.obj.urlToImage}/>
       </S.NoticeContainer>
    )
}
export default Notice;