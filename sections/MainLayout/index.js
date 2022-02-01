//components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { AnimatePresence } from "framer-motion";

//bootstrap
const MainLayout = ({ children }) => {
    return (
        <>
        <Navbar />
            <AnimatePresence>
            {children}
            </AnimatePresence>
        <Footer />       
        </>
    )
};
export default MainLayout;