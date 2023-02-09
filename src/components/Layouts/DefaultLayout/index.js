import Header from "./Header";
import Footer from "./Footer";
import Contaier from "./Container";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <Contaier />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;