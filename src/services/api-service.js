const base = 'https://codeer.letscodeon.in/api/v2/'

const get = async function (url) {
  const res = await fetch(url)
  return await res.json()
}

const post = async function (url, data) {
  // new URLSearchParams()
  // '?name=Vikas+Kukreti&age=22'
  const res = await fetch(base + url, {
    body: JSON.stringify(data),
  })
  return await res.json()
}

const methods = { get, post }
export default methods
