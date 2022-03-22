![demo](https://raw.githubusercontent.com/LwnaDev/Electron-CRUD/main/github/img/screen2.png)

# Installation
* The complete guide can be found at [GitHub](https://github.com/LwnaDev/Electron-CRUD)

<h1 align="center">🌀 Electron CRUD 🌀</h1>

<p align="center">
  A little program made with JavaScript (Nodejs), HTML, CSS and the framework (Electron).
The CRUD (Create, Read, Update and Delete) will allow us to perform these operations from the MySQL database, with login. (The project is originally in Spanish).
Login area.
</p>


> This project was made for learning purposes only and comes initially from [Fazt Code](https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA) YouTube channel with my own modifications

# Download
Available for Mac, Linux and Windows.

[Check the latest release](https://github.com/LwnaDev/Electron-CRUD)

# License
💜 [MIT License](https://github.com/LwnaDev/Electron-CRUD/blob/main/LICENSE)

### Code Example

```javascript
const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const {getConnection} = require('./database')
const path = require('path'); 

//Se define la ventana de login la cual vera el usuario en primera instancia
let window;
let winlogin;

function loginWindow () {
//Se definen los valores predeterminados de la ventana
winlogin = new BrowserWindow({
    width: 1000,
    height: 700,
    center: true,
    backgroundColor: '#fff', 
    title: 'Run Mountain', 
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    transparent: true,
    icon: `${__dirname}/recursos/img/flatpak.ico`, 
    movable: true,
    webPreferences: {
    // nodeIntegration: true,
    preload:path.join(__dirname, './recursos/js/login.js')
    }
})
//Se carga la pagina de login.html para que se muestre en la ventana
winlogin.loadFile('./vistas/login.html');
}
```