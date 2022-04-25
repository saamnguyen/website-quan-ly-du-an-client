import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import BoardLayout from "./layouts/BoardLayout";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="board" element={<BoardLayout />}>
                    <Route path=":id" element={<Board />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
