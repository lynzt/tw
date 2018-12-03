_This is one of the steps in the Truss interview process. If you've
stumbled upon this repository and are interested in a career with
Truss, [check out our jobs page](https://truss.works/jobs)._

# Truss Software Engineering Interview
Developed using Mac and Docker...

## Build docker image
`docker build -t node/truss .`

## run tests
`docker run -it -v {$PWD}:/usr/src/app -v /usr/src/app/node_modules --rm node/truss npm test`

## run normalize script
`docker run -it -v {$PWD}:/usr/src/app -v /usr/src/app/node_modules --rm node/truss npm run normalize`

### todo(s)
1. add normalize tests / mocks
2. use environment vars for passing of hard coded things like filenames / timezones / etc
