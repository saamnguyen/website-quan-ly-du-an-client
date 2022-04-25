import React from "react";
import TableBoard from "../components/Board/TableBoard";
import { Container, Draggable } from "react-smooth-dnd";

let arr = [1, 2, 3];

const Board = () => {
    function onColumnDrop() {
        console.log("onDrop");
    }

    return (
        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                dragHandleSelector=".table-board .header"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: "cards-drop-preview",
                }}
            >
                {arr.map((i) => {
                    return (
                        <Draggable key={i}>
                            <TableBoard />
                        </Draggable>
                    );
                })}
            </Container>
        </div>
    );
};

export default Board;
