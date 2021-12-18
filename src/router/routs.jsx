import {useRoutes} from 'react-router-dom';
import Home from '../pages/home';
import NoticePage from '../pages/notice';
import notFound from '../components/404';

const Routs = ()=>{
    return useRoutes([
        {path:"/", element:<Home/>},
        {path:"noticia/:id",element:<NoticePage/>},
        {path:"*",element:<notFound/>}
    ])
}
export default Routs;