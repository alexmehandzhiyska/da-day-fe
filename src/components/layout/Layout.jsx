import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './Layout.css';

const Layout = (props) => {
    return (
        <div> 
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;