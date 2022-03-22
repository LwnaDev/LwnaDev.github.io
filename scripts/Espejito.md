![espejito](https://raw.githubusercontent.com/LwnaDev/espejito/main/img/Demo.png)

# Installation
* The complete guide can be found at [GitHub](https://github.com/LwnaDev/espejito)
* Page can be found [Here](https://lwnadev.github.io/espejito/)

<h1 align="center">🍀 Espejito... My Data 🍀</h1>
<p align="center">
  Small application that displays the data that a web page can obtain
</p>

> This project was made for learning purposes only


# How to use
## Step 1⃣
* Access to the [Website](https://lwnadev.github.io/espejito/)
## Finish
* View your data, if you are using VPN it will show another address, if you are using Brave or another browser it may block tracking.

# Download
Available for Mac, Linux and Windows.

[Check the latest release](https://github.com/LwnaDev/espejito)

# License
💜 [MIT License](https://github.com/LwnaDev/espejito/blob/main/LICENSE)

### Code Example

```javascript
const container = document.getElementById("sections");

const sections = [
  {
    title: "Estas usando un navegador",
    content: {
      Nombre: platform.name,
      Version: platform.version,
      Diseño: platform.layout,
      Idioma: navigator.language,
      Cookies: navigator.cookieEnabled,
      "No rastrear": navigator.doNotTrack,
      Complementos: navigator.plugins?.length,
    },
  },
];
```