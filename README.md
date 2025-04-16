# GitHub Users – Challenge Técnico Frontend

Este proyecto fue desarrollado como parte de un challenge técnico usando [Next.js](https://nextjs.org), [React](https://react.dev/), [Material UI](https://mui.com/) y `styled-components`.
Permite buscar usuarios de GitHub, ver sus perfiles, marcarlos como favoritos y acceder a una vista de detalle sencilla.

## ⚙️ Requisitos previos
Este proyecto requiere Node.js v18.18.0 o superior.

> ⚠️ Si tenés una versión anterior (por ejemplo 18.17.1), Next.js mostrará el siguiente error:
You are using Node.js 18.17.1. For Next.js, Node.js version "^18.18.0 || ^19.8.0 || >= 20.0.0" is required.

## 🔄 Cómo actualizar Node.js?
Usando [nvm](https://github.com/nvm-sh/nvm):
```bash
nvm install 20
nvm use 20
```

## 🚀 Instalación y ejecución
1. Cloná el repositorio:
```bash
git clone git@github.com:EchuSosa/github-user.git
cd github-user
```
2. Instalá las dependencias:
```bash
npm install
```

3. Iniciá el servidor de desarrollo:
```bash
npm run dev
```

4. Abrí http://localhost:3000 en tu navegador para ver el proyecto funcionando.

## 🧩 Tecnologías utilizadas
- Next.js con Page Router y SSR
- React 18 + TypeScript
- Material UI + styled-components (con soporte para modo dark/light)
- Context API para favoritos
- React.lazy + Suspense
- Skeleton loading
- Persistencia en localStorage
- Accesibilidad básica (aria-label, alt)

## 🌓 Cambio de tema
El proyecto incluye un botón para alternar entre modo claro y oscuro, con íconos dinámicos y estilos adaptados a cada tema.
