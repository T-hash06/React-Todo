import { atom } from "nanostores";

export const todos = atom<string[]>([]);

export function addTodo(todo: string) {
	todos.set([...todos.get(), todo]);
}
