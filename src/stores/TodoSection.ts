import { atom } from "nanostores";

export const sectionActive = atom<boolean>(false);

export function toggleSection() {
	sectionActive.set(!sectionActive.get());
}
