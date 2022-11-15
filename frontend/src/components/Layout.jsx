import Header from './Header'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
    const location = useLocation(); 
    const { children } = props
    return <div>
        { location.pathname !== "/dashboard" && location.pathname !== "/trips" && <Header />}
        { location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/booking" && <Sidebar />}
        {children}
    </div>
}

export default Layout;