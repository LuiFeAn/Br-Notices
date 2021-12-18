import * as S from './AppStyles';
import Routs from './router/routs'
import Footer from './components/footer';
const App = ()=>{
  return(
    <>
      <S.AppContainer>
        <S.AppName>
          BrNotícias
        </S.AppName>
      </S.AppContainer>
      <Routs/>
      <Footer/>
      </>
  )
}
export default App