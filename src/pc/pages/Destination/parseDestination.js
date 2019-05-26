export const parseDestination = destination => {
  //行数
  const row = 12
  const arr = []
  destination.forEach(obj => {
    const { year, members } = obj
    arr.push({
      type: "year",
      data: year
    })
    members.forEach(member => {
      arr.push({
        type: "member",
        data: member
      })
    })
  })
  //列数
  const column = Math.ceil(arr.length / row)
  const result = []
  for (let i = 0; i < column; i++) {
    result.push(arr.splice(0, row))
  }
  return result
}
