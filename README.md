# Tiptip Technical Test
This app is built for Tiptip Technical Test

This project was bootstrapped from [Rangka](https://github.com/santosidauruk/rangka).

# Tech Stack
1. Next.js
2. Typescript
3. Material-UI
4. Zustand
5. SWR


## Environment Setup

This repo is using environment variable by using `.env` file.
Currently we just have 1 variable i.e `NEXT_PUBLIC_HOST_URL=https://api.jikan.moe/v4`

## How to Run
Make sure you installed the packages
- Run `yarn` to installed packages
- Run `yarn dev` to run development server and go to `http://localhost:3000` to view it
- Run `yarn build` to build the app into production mode


## Directory Structure
```
  ├── public                    # any static file
  └── src
      ├── pages                 # routing
      ├── modules               # feature and parts that spesific for feature
          ├── components
          ├── hooks
          └── test               
      ├── components            # shared component
      ├── utils                 # shared libs
      └── styles                # global styles
```

## Deployment

This repo is deployed using [vercel](https://vercel.com/). You can see the deployed app [here](https://tiptip-technical-test-santosidauruk.vercel.app/)
