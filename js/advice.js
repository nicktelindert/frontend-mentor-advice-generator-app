const advice_backend_url =  'https://api.adviceslip.com/advice';

const getRandomAdvice = () => {
  const request = new XMLHttpRequest()
  request.open('GET', advice_backend_url, false)
  request.send()
  try {
    return JSON.parse(request.responseText)

  } catch (e) {
    return false
  }
}

const setRandomAdvice = (id, description) => {
  const advice_title = `ADVICE #${id}`
  document.querySelector('#advice-title').innerHTML = advice_title
  document.querySelector('#advice-description').innerHTML = `	&#8220;${description}&#8221;`
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('#advice-dice-bottom').addEventListener('click', () => {
    const advice = getRandomAdvice()
    setRandomAdvice(advice.slip.id, advice.slip.advice)
  })
  const advice = getRandomAdvice()
  setRandomAdvice(advice.slip.id, advice.slip.advice)
})
