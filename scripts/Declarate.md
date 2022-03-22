![declarate](https://raw.githubusercontent.com/LwnaDev/Declarate/main/src/Captura.png)

# Installation
* The complete guide can be found at [GitHub](https://github.com/LwnaDev/Declarate)

<h1 align="center">🌸 Declarate 🌸</h1>

<p align="center">
Small website that allows you to declare your love to that special person with a very naughty button.
</p>

> This project was made for fun and learning purposes.
# How to use
## Step 🌳
* Download or go to
  * [Declarate](https://lwnadev.github.io/Declarate)

# Download
Available for Mac, Linux and Windows.

[Check the latest release](https://github.com/LwnaDev/Declarate)

# License
💜 [MIT License](https://github.com/LwnaDev/Declarate/blob/main/LICENSE)

### Code Example

```javascript
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',function () {
	swal({
  title: "Sabia que dirias que si, pero...",
  text: "¿Te gusta el sushi 🍣?",
  icon: "warning",
  buttons: true,
  dangerMode: false,
}).then((willDelete) => {
  if (willDelete) {
    swal("Lo sabia, Te quiero mucho 💖", {
      icon: "success",
    });
    setTimeout( function() { window.location.href = "https://www.youtube.com/watch?v=yvJp0B_74Tg"; }, 6000 );
  } else {
    swal("Perdona, Pero creo que no somos compatibles 😔");
  }
});
});
```