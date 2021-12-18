import * as S from './style';
import notice from '../../types/notice'

type Props = {
    obj:notice,
}

const Notice = (props:Props)=>{

    return(
       <S.NoticeContainer>

           <S.NoticeTitle>
              Notícia: {props.obj.title}
           </S.NoticeTitle>

            <S.NoticeImg src = {props.obj.urlToImage}/>
            
            <S.NoticeTitle>
                Conteúdo:
            </S.NoticeTitle>

            <S.NoticeContent>
                {props.obj.content}
            </S.NoticeContent>
       </S.NoticeContainer>
    )
}
export default Notice;