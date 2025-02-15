"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTodos, addTodo, removeTodo } from "../../redux/slices/todoSlice";
import { RootState } from "../../redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Todo {
  id: number;
  name: string;
  description: string;
}

const Todos = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const [todos, setLocalTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      fetchTodos();
    }
  }, [token]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setTodos(response.data));
      setLocalTodos(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load todos.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async () => {
    try {
      const response = await axios.post(
        "/api/todos",
        { name: newTodo.name, description: newTodo.description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(addTodo(response.data));
      setLocalTodos([...todos, response.data]);
      setNewTodo({ name: "", description: "" });
      toast.success("Todo added!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add todo.");
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`/api/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(removeTodo(id));
      setLocalTodos(todos.filter((todo) => todo.id !== id));
      toast.success("Todo deleted!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete todo.");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Your Todos</h1>
      <div className="mb-5 flex gap-3">
        <input
          type="text"
          placeholder="Todo Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          className="border p-2 rounded"
        />
        <button className="bg-green-500 text-white p-2 rounded" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className="w-96">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="bg-white shadow-md p-3 mb-2 rounded flex justify-between items-center">
              <div>
                <h3 className="font-bold">{todo.name}</h3>
                <p>{todo.description}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No todos found</p>
        )}
      </ul>
    </div>
  );
};

export default Todos;
