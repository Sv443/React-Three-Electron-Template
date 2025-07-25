# React, MUI, Three.js, Electron, TypeScript & Vite Template
Extensive template and boilerplate for building web- and desktop apps with React, Material UI, Three.js, Electron, TypeScript and Vite.  
Supports hot reloading inside the electron app and has a full ESLint configuration, a custom loading screen and a lot of electron background process boilerplate.  
Also sports GitHub Actions workflows for linting and analyzing the code for vulnerabilities and building the executable on multiple platforms.  

<br>

## Setup:
1. [Click here to create a repository based on this template](https://github.com/Sv443/React-Three-Electron-Template/generate)
2. Clone your repository with git
3. Install [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.io/installation)
4. Run the command `pnpm i` to install dependencies
5. Run `pnpm dev` to start the electron app using the vite dev server.  
  Saving files will now automatically rebuild and reload the changed parts of the app.

<br>

## Commands:
| Command | Description |
| --- | --- |
| `pnpm dev` | Start the vite dev server and the electron app |
| `pnpm lint` | Lint the code with ESLint |
| `pnpm build` | Build the installer for the current platform |
| `pnpm build-win` | Build for Windows specifically |
| `pnpm build-mac` | Build for MacOS specifically |
| `pnpm build-linux` | Build for Linux specifically |

<br>

## Files & Folders:
| Path | Description |
| --- | --- |
| `src/App.tsx` | Main component of the app |
| `src/objects/` | Folder that contains all Three.js "object components" (meshes etc.) |
| `src/components/` | Folder for all other misc. React components |
| `src/theme.ts` | Theme configuration |
| `src/global.css` | CSS that is applied globally |
| `electron/` | Electron-specific code like creating windows and handling IPC |
| `public/` | Static files that are copied to the dist folder |
| `dist/` | Contains the web app built by vite |
| `dist-electron/` | Contains electron build files |
| `release/` | Folder where the executables are placed after running `pnpm build` |

<br>

## Additional info & guides & interesting libraries

### Info
- Electron Builder can only build for the current platform.  
  If you want to build for another platform, you need to run the command on that platform.  
  Alternatively, use a CI service like the GitHub workflows in `.github/workflows/` to build for all platforms.  
- Replace the `LICENSE.txt` file with your own license.  

### Main stuff
- [Getting started with MUI](https://mui.com/material-ui/getting-started/overview/)
- [Getting started with react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [Creating a scene in Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

### Helpful stuff
- [The Big List of Three.js Tips and Tricks](https://discoverthreejs.com/tips-and-tricks/)
- [electron-builder documentation to customize the installer](https://www.electron.build/)

### Cool libraries
- [Convert gltf 3D models to components](https://github.com/pmndrs/gltfjsx)
- [Useful helpers for react-three-fiber](https://github.com/pmndrs/drei)
- [Flexbox for react-three-fiber](https://github.com/pmndrs/react-three-flex)
- [Physics-based hooks for react-three-fiber](https://github.com/pmndrs/use-cannon)
- [Spring physics based React animation library](https://github.com/pmndrs/react-spring)
- [React-first components GUI](https://github.com/pmndrs/leva)
