import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Todolist = () => {
    const emptyTodo = { desc: "", date: "" };
    const [todo, setTodo] = useState(emptyTodo);
    const [todos, setTodos] = useState([]);

    const inputChanged = event => {
        const eventValue = event.target.value;
        const eventName = event.target.name;
        const todoCopy = { ...todo };
        todoCopy[eventName] = eventValue;
        setTodo(todoCopy);
    };

    const addTodo = event => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo(emptyTodo);
    };

    const deleteItem = index => () => {
        setTodos([...todos].filter((todo, i) => i !== index));
    };

    const columns = [
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Description",
            accessor: "desc"
        },
        {
            Header: "Action",
            Cell: row => <button onClick={deleteItem(row.index)}>Delete</button>
        }
    ];
    return (
        <div>
            <form onSubmit={addTodo}>
                Description:
                <input
                    className="u-margin-small"
                    name="desc"
                    type="text"
                    onChange={inputChanged}
                    value={todo.desc}
                />
                Date:
                <input
                    className="u-margin-small"
                    name="date"
                    type="text"
                    onChange={inputChanged}
                    value={todo.date}
                />
                <input type="submit" value="Add" />
            </form>
            <ReactTable
                data={todos}
                columns={columns}
                filterable={true}
                sortable={true}
                defaultPageSize={10}
            />
        </div>
    );
};

export default Todolist;
