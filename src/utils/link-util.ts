export function postToUrl(url: string, params: Record<string, string>) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = url
  form.target = '_blank'
  form.style.display = 'none'

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = params[key]
      form.appendChild(input)
    }
  }

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form) // cleanup
}
