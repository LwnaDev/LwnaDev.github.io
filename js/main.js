jQuery(document).ready(function($) {
  // Eliminar el texto de la url al pasar el ratón por los enlaces de los iconos
  $('a').each(function() {
    $(this).attr('onclick', 'window.location.href="' + $(this).attr('href') + '"');
    $(this).removeAttr('href');
  });
});

jQuery(document).ready(function($) {
  /**
   * Establecer el footer de página siempre en la parte inferior de la página
  **/
  function footerAlwayInBottom(footerSelector) {
    var docHeight = $(window).height();
    var footerTop = footerSelector.position().top + footerSelector.height();
    if (footerTop < docHeight) {
      footerSelector.css("margin-top", (docHeight - footerTop) + "px");
    } else {
      footerSelector.css('margin-top', '0px');
    }
  }
  // Aplicar cuando la página se está cargando
  footerAlwayInBottom($("#footer"));

  // Aplicar cuando la página está completamente cargada
  $(window).on("load", function() {
    footerAlwayInBottom($("#footer"));
    $(window).trigger('resize');
  });

  // Aplicar cuando la página se redimensiona
  $(window).resize(function() {
    footerAlwayInBottom($("#footer"));
  });

  // Aplicar cada 25 ms
  window.setInterval(function() {
    footerAlwayInBottom($("#footer"));
  }, 25);

  $('.docs').on('click', function(e) {
    Swal.fire({
      title: 'Genial!',
      width: 700,
      text: 'Quiza rechace tu solicitud de amistad de todas formas!',
      imageUrl: './images/discord.png',
      imageAlt: 'My Discord',
      background: '#202225',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Bien!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
      '<i class="fa fa-thumbs-down"></i> Nel kpo!',
      cancelButtonAriaLabel: 'Thumbs down',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.dismiss == "cancel") {

        swal.fire({
          title: "CAISTE RICK ROLLED",
          background: '#202225',
          width: '500px',
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Me has pillado!',
          cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Haha, predecible.',
          showCloseButton: true,
          showCancelButton: true,
          html:
          '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
        }).then((result) => {
          if (result.dismiss == "cancel") {
            Swal.fire({
              title: "TE HACES EL VIVO WACHO?",
              html: "<a href='./images/background.gif'><img src='./images/siren-head.gif' width=290 alt=Siren-Head/></a>",
              imageAlt: "BERSERK",
              confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Lo siento!',
              confirmButtonAriaLabel: 'Thumbs up, great!',
            }).then((result) => {
              if (!result.dismiss) {
                Swal.fire({
                  title: "¡No te arrepientes! Te tengo",
                  width: '500px',
                  html:
                  '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/KvMoU38_zy0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
                })
              }
            })
          }
        })
      }
    })
  });
});

const maquina3 = document.getElementById('maquina-escribir3')
const maquina1 = document.getElementById('maquina-escribir1')


const maquinaEscribir1 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      clearInterval(escribir)
    }
  }, tiempo)
}

const maquinaEscribir3 = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)
      j--
      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}

maquinaEscribir1("LwnaDev",300, maquina1)
maquinaEscribir3("mv ~ /dev/null  ",150, maquina3)
