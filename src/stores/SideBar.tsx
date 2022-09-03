import { atom } from "nanostores";

export const isActive = atom<boolean>(false);

export function toggleActive(): void {
	isActive.set(!isActive.get());
}
