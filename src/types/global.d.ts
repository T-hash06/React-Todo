export {};

declare global {
	interface Todo {
		content: string;
		done: boolean;
		createdAt: Date;
	}
}
