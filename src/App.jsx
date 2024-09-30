import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Article from "./pages/Article.jsx";
// import { Dashboard } from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard.jsx";
function App() {
    return (
        <>
            <AuthContextProvider>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <Header /> <Body />
                                </div>
                            }
                        ></Route>
                        <Route path="/article" element={<Article />}></Route>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                    </Routes>
                </Router>
            </AuthContextProvider>
        </>
    );
}

export default App;
