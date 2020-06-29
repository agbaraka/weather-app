# Introduction

This is a web application for getting weather forecast for Tanzania cities. 

The application is now hosted on Google Cloud Run. Click [here](https://weather-app-yzirkvms4q-uc.a.run.app) to view the hosted version.

# Build and Deploy

## Enviroment Variables
The application requires ```OWM_API_KEY``` environment variable to be configured. This is an API_KEY that can be aquired from [Open Weather API](https://home.openweathermap.org/api_keys) 


## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ export OWM_API_KEY=XXXX npm run dev
```

## Production

```bash
# install dependencies
$ npm install

# build for production and launch server
$ npm run build
$ export OWM_API_KEY=XXXX npm run start
```

## Docker Container

```bash
# At the root of the project
$ docker build -t weather-app .

# Run the container
$ docker run --rm -p 3000:3000 -e OWM_API_KEY=XXXX weather-app
```

# Acknowledgement

1. [NuxtJS](https://www.google.com)
2. [Tailwind CSS](https://tailwindcss.com/)
2. [Axios](https://nuxtjs.org/)
3. [ExpressJS](https://expressjs.com/)
4. [Open Weather Map Api](https://openweathermap.org/api)
5. [Google Cloud Build](https://cloud.google.com/cloud-build)
5. [Google Container Registry](https://cloud.google.com/container-registry)
6. [Google Cloud Run](https://cloud.google.com/run)
