const advice_backend_url =  'https://api.adviceslip.com/advice';

const getRandomAdvice = async () => {
  return await fetch(advice_backend_url, {cache:'no-cache'}).then((response) => response.json())
}

const setRandomAdvice = (id, description) => {
  document.querySelector('#advice-title').innerHTML = `ADVICE #${id}`
  document.querySelector('#advice-description').innerHTML = `	&#8220;${description}&#8221;`
}

document.addEventListener('DOMContentLoaded', async (event) => {
  document.querySelector ('#advice-dice-bottom').addEventListener ('click', async () => {
    const advice = await getRandomAdvice ()
    setRandomAdvice (advice.slip.id, advice.slip.advice)
  })
  const advice = await getRandomAdvice ()
  setRandomAdvice (advice.slip.id, advice.slip.advice)
})
