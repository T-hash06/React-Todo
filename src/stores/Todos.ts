import { atom } from "nanostores";

export const todos = atom<Todo[]>([]);

export function setTodos(newTodos: Todo[]) {
	todos.set(newTodos);
}

export function addTodo(todo: Todo) {
	todos.set([...todos.get(), todo]);
	localStorage.setItem("todos", JSON.stringify(todos.get()));
}

export function toggleTodo(index: number) {
	const newTodos = todos.get();
	newTodos[index].done = !newTodos[index].done;

	todos.set(newTodos);
	localStorage.setItem("todos", JSON.stringify(todos.get()));
}
