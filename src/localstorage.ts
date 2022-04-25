import store, { RootState } from "./store";

export function loadState(): RootState | undefined {
  try {
    const data = window.localStorage.getItem('it1shka/notes')
    // console.log(data)
    if(!data) return undefined
    return JSON.parse(data) as RootState 
  } catch(error) {
    console.log(error)
    return undefined
  }
}

export function persistState(): void {
  const storedState = store.getState()
  const data = JSON.stringify(storedState)
  // console.log(data)
  window.localStorage.setItem('it1shka/notes', data)
  alert('Saved!')
}