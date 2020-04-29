export function pathToRoute(path, start, prefix = "/") {
  const parts = path.split("/")

  let startIndex
  const segments = []
  for (let part of parts) {
    if (part === start) {
      segments.push(part)
      startIndex = parts.indexOf(part)
    } else if (startIndex) {
      if (parts.indexOf(part, startIndex) === parts.length - 1) {
        segments.push(part.split(".")[0])
      } else {
        segments.push(part)
      }
    }
  }

  return `${prefix}${segments.join("/")}`
}
