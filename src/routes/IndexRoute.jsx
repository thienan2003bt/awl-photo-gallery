import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";

// The routing components for application

function IndexRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/photos" element={<HomePage />} />
            </Route>
            <Route path="/photos/:id" element={<PhotoPage />} />
        </Routes>
    );
}

export default IndexRoute;