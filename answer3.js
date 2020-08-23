function wearPPE() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Wearing PPE"), 2000)
  )
}

function fightCorona() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Fighting Corona"), 1000)
  )
}

function execute() {
  const wearPPEPromise = wearPPE()
  const fightCoronaPromise = fightCorona()

  Promise.all([wearPPEPromise, fightCoronaPromise]).then((result) => {
    console.log(result[0])
    console.log(result[1])
  })
}

execute()
