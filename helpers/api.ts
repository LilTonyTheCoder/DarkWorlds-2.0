export const $api = async (url, options?) => {
  if (options) {
    options.body = JSON.stringify(options?.body)
  }

  const response = await fetch(url, options)
  const jsonData = await response.json()
  return jsonData
}
