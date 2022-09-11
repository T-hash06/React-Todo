import { atom } from "nanostores";

export const todos = atom<Todo[]>([]);

function saveInLocal() {
	localStorage.setItem("todos", JSON.stringify(todos.get()));
}

export function setTodos(newTodos: Todo[]) {
	todos.set(newTodos);
}

export function addTodo(todo: Todo) {
	todos.set([...todos.get(), todo]);

	saveInLocal();
}

export function deleteTodo(index: number) {
	const newTodos = todos.get().slice();
	newTodos.splice(index, 1);
	todos.set(newTodos);

	saveInLocal();
}

export function toggleTodo(index: number) {
	const newTodos = todos.get();
	newTodos[index].done = !newTodos[index].done;
	todos.set(newTodos);

	saveInLocal();
}
