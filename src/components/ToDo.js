import React, {useState} from 'react';

function ToDo() {

    /*
    // Assignment deconstructor (Array)
    const [num1, num2] = [1,2];
    console.log(num1);
    console.log(num2);
    */

    /**
     * Set up for state
     * First item is a variable that holds the state value.
     * Second item is a function that we use to update the state value.
     * !!! IMPORTANT: We never update the first item DIRECTLY EVER
     */

    const [newTask, setNewTask] = useState(''); // Argument in 'useState()' is the default value for this state.
    

    // Set up state for our to do list items.
    const [toDos, setToDos] = useState([
        {task: "Buy milk"},
        {task: "Learn React"},
        {task: "Find out what Redux is"}
        //Turn the array into a map with key-value pairs, easy to output JSX this way.
    ]);


    const addNewTask = event => {
        event.preventDefault(); // Stops the page from refreshing when submission is entered.

        // We can use the spread operator (...) to break up an array so that each item inside is treated as an arguement(value seperated by comma, if we were to write it manually)
        const newToDosList = [...toDos]; // Fresh array with the same values as the original array (toDos)
                                        // !!! REMEMBER, WE NEVER UPDATE THE STATE VARIABLE DIRECTLY
        newToDosList.push({task: newTask});

        // Update the 'toDos' state value.
        setToDos(newToDosList); // What we pass in will replace the old state value!

        // Clear the new task field now that our ToDo is added
        setNewTask('')
    }

    // We use 'return' for our render inside of a component
    return (
        <>
            <form onSubmit={addNewTask}>
                <label htmlFor='task'>New Task:</label>
                <input type='text' id='task' onChange={e => {setNewTask(e.target.value)}} value={newTask} />
                <p>
                    <strong>
                        Current Task Value:
                    </strong>
                    <em>
                        {newTask}
                    </em>
                </p>
                <input type='submit' value='Add To-Do' />
            </form>
            <ul>{toDos.map( ( toDo, index ) => <li key={index}>{toDo.task}</li> )}</ul>
        </>
    );
}

export default ToDo;