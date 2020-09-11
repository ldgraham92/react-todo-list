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

    const [newTask, setNewTask] = useState('');    // Argument in 'useState()' is the default value for this state.

    // We use 'return' for our render inside of a component
    return (
        <>
            <form>
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
            <ul></ul>
        </>
    );
}

export default ToDo;