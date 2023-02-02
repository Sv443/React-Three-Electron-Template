# React, MUI, Three.js, Electron, TypeScript & Vite Template

<br>

## Setup:
1. [Click here to create a repository based on this template](https://github.com/Sv443/React-Three-Electron-Template/generate)
2. Clone your repository with git
3. Run the command `npm i` to install dependencies

<br>

## Commands:
| Command | Description |
| --- | --- |
| `npm run dev` | Starts the vite dev server and the electron app |
| `npm run lint` | Lint the code with ESLint |
| `npm run build` | Compiles the TS code and builds the electron executable |
| `npm run build-win` | Build for Windows only |
| `npm run build-mac` | Build for MacOS only |
| `npm run build-linux` | Build for Linux only |

<br>

## Files & Folders:
| Path | Description |
| --- | --- |
| `src/App.tsx` | Main component of the app |
| `src/objects/` | Folder that contains all Three.js "object components" (meshes etc.) |
| `src/components/` | Folder for all other misc. React components |
| `src/theme.ts` | Theme configuration |
| `src/main.css` | CSS that is applied globally |
| `electron/` | Electron-specific code like creating windows and handling IPC |

<br>

## Additional info & guides & interesting packages

### Main stuff
- https://mui.com/material-ui/getting-started/overview/
- https://github.com/pmndrs/react-three-fiber
- https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

### Helpful stuff
- https://discoverthreejs.com/tips-and-tricks/

### Other cool stuff
- https://github.com/pmndrs/gltfjsx
- https://github.com/pmndrs/drei
- https://github.com/pmndrs/react-three-flex
- https://github.com/pmndrs/use-cannon
- https://github.com/pmndrs/react-spring
- https://github.com/pmndrs/leva