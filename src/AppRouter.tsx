import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Pick from "./routes/Pick";
import Index from "./routes/Index";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/pickban' element={<Pick />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;