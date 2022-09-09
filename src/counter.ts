const worker = new Worker(new URL('./worker.ts', import.meta.url), {
  type: 'module'
})

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(++counter)
    worker.postMessage(counter)
    import("./logger").then(({ log }: any) => log(`main: ${counter}`))
  })
  setCounter(0)
}
