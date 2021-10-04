[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Feduardocampo%2Fmisfans-premiun&env=NEXT_PUBLIC_API_ID,NEXT_PUBLIC_API)

# Findity

Findity is an app to find the best profile
This project was created with fast and intuitive development in place.

Demo live at: [misfans-premiun.vercel.app](https://misfans-premiun.vercel.app/)

## Features

- Nextjs
- SWR Hooks
- UI Components
- Search
- Responsive
- Vanilla CSS
- CSS Naming convention base on tailwindcss css & Material UI
- CSS Utilities
- Reusable components

## Configuration

### Deberás registrarte y obtener tu llave para poder consumir la API https://dummyapi.io

Configure sus variables de entorno local

```
  env.local
```

1. Cree un '.env.local' y cambie el valor de 'NEXT_PUBLIC_API_ID' por el que ha creado en https://dummyapi.io previamente al crear su cuenta.
2. Tambien cree dentro de su variable de entorno 'env.local' la 'NEXT_PUBLIC_API'.

### Example

```
NEXT_PUBLIC_API_ID=exampleIDApp
NEXT_PUBLIC_API=https://dummyapi.io/data/v1/user

```

## Run

    1. npm install
    2. npm run dev
