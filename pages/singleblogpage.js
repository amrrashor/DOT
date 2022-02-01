import { Animated } from "../components/layout/Animation";
import MainLayout from "../sections/MainLayout";
import SinglePage from "../sections/SingleBlogPage";

const SingleBlogPage = () => {
    return (
        <MainLayout>
            <Animated>
                <SinglePage />
            </Animated>
        </MainLayout>
    )
}

export default SingleBlogPage