//framer motion
import { AnimatePresence } from "framer-motion";

//components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

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