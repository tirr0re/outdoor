# OUTDOOR

To run this project need to do next steps in terminal:
- Install all components with command:
```
npm install
```
- Build project with command:
```
grunt build
```
- Build docker image with command:
```
docker build -t outdoorsite:1.0 .
```
- To run the image in a Docker container with command:
```
docker run -itd --name outdoor --publish 8080:80 outdoorsite:1.0
```