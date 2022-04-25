import { RootState } from "./store";

export const STORAGE_KEY = 'it1shka/notes'

export function loadState(): RootState | undefined {
  try {
    const data = window.localStorage.getItem(STORAGE_KEY)!
    if(!data) return undefined
    return JSON.parse(data) as RootState 
  } catch {
    return undefined
  }
}

export function persistState(state: RootState): void {
  const data = JSON.stringify(state)
  window.localStorage.setItem(STORAGE_KEY, data)
}