import React from "react";
import CardBoard from "./CardBoard";
import { Container, Draggable } from "react-smooth-dnd";

const TableBoard = () => {
    return (
        <div className="table-board">
            <div className="header">
                <p>Đang làm</p>
                <div className="icon">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                </div>
            </div>
            <div className="list-card">
                <Container
                    groupName="col"
                    onDragStart={(e) => console.log("drag started", e)}
                    onDragEnd={(e) => console.log("drag end", e)}
                    // onDrop={(e) => this.onCardDrop(column.id, e)}
                    // getChildPayload={(index) =>
                    //     this.getCardPayload(column.id, index)
                    // }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    // onDragEnter={() => {
                    //     console.log("drag enter:", column.id);
                    // }}
                    // onDragLeave={() => {
                    //     console.log("drag leave:", column.id);
                    // }}
                    onDropReady={(p) => console.log("Drop ready: ", p)}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: "drop-preview",
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    <Draggable>
                        <CardBoard />
                    </Draggable>
                    <Draggable>
                        <CardBoard />
                    </Draggable>
                    <Draggable>
                        <CardBoard />
                    </Draggable>
                    <Draggable>
                        <CardBoard />
                    </Draggable>
                    <Draggable>
                        <CardBoard />
                    </Draggable>
                </Container>
            </div>
            <div className="footer">
                <div className="addCard">
                    <i className="bx bx-plus"></i>
                    <p>Thêm thẻ</p>
                </div>
            </div>
        </div>
    );
};

export default TableBoard;
