onmessage = e => {
    import("./logger").then(({ log }: any) => log(`worker: ${e.data}`))
}

export {}