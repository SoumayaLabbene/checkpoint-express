const time = (req, res, next) => {
  var d = new Date()
  var hour = d.getHours()
  var day = d.getDay()
  console.log(`${d}-${hour}-${day}`)
  if (hour > 9 && hour < 17 && day > 0 && day < 6) {
    res.sendFile(__dirname + '/views/home.html')
  } else {
    res.end(
      'We are closed. The working hours are from Monday to Friday, from 9 to 17.',
    )
  }
}

module.exports = time
