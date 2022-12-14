# Timestamp Microservice API

### Project Description:
This API is a certification project for freeCodeCamp's Backend Development and APIs course. The API receives GET requests with a "date" parameter and responds with JSON containing the "date" parameter converted to UTC format and milliseconds. If there is no "date" parameter, the response contains the current time in UTC and milliseconds. The API can handle dates that can be parsed by "new Date(date_parameter)." If the "date" parameter is invalid, the response is '{ error : "Invalid Date" }.'

### [Replit](https://replit.com/@OsahonOjo/fCC-apis-project-timestamp)

### Project Requirements:
1. A request to "/api/:date?" with a valid date should return a JSON object with a "unix" key that is a Unix timestamp of the input date in milliseconds (as type Number)
2. A request to "/api/:date?" with a valid date should return a JSON object with a "utc" key that is a string of the input date in the format: "Thu, 01 Jan 1970 00:00:00 GMT"
3. A request to "/api/1451001600000" should return '{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }'
4. Your project can handle dates that can be successfully parsed by "new Date(date_string)"
5. If the input date string is invalid, the api returns an object having the structure '{ error : "Invalid Date" }'
6. An empty date parameter should return the current time in a JSON object with a "unix" key
7. An empty date parameter should return the current time in a JSON object with a "utc" key

These details can also be found on [freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
