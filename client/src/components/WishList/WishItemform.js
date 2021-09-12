import { useRef } from 'react'
import { FaPlus  } from "react-icons/fa";


const WishItemform = ({ items, setItems}) => {
    const todoNameRef = useRef()



    function handleAddTodo(e){
        e.preventDefault()
        const value = todoNameRef.current.value
        const newItem = {item_name: value}
        if (value === '') return
        todoNameRef.current.value = null
        fetch("/wishitems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(newItem),
        })

        setItems([...items, newItem])
    }

    return (
        <>
        <form className='wishlist-form'onSubmit={handleAddTodo}>
            <input className='todo-input' ref={todoNameRef} placeholder='Add a Item to Your Wishlist...'/>
            <button className='todo-button'>
                <FaPlus className='fas'/>
            </button>
        </form>
        </>
    )
}

export default WishItemform


{/* <form>
<input type="text" class="todo-input" />
<button class="todo-button" type="submit">
  <i class="fas fa-plus-square"></i>
</button>
<div class="select">
  <select name="todos" class="filter-todo">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="uncompleted">Uncompleted</option>
  </select>
</div>
</form> */}