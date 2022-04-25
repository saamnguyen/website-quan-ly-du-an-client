import React from "react";
import { Outlet } from "react-router-dom";
import NavBoard from "../components/NavBoard";

const BoardLayout = () => {
    return (
        <div className="board">
            <NavBoard />
            <Outlet />
        </div>
    );
};

export default BoardLayout;
