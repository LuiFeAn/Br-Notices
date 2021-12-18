import {useRoutes} from 'react-router-dom';
import Home from '../pages/home';
import NoticePage from '../pages/notice';

const Routs = ()=>{
    return useRoutes([
        {path:"/", element:<Home/>},
        {path:"noticia/:id",element:<NoticePage/>}
    ])
}
export default Routs;