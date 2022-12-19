 // memanggil plugin magnific popup
 $('.produk_ulasan-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
    enabled: true
    },
    zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out',
    opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
    }
});
// memanggil datatable membuat callback datatable pada magnific popup agar gambar
// yang di munculkan sesuai pada saat pindah paginasi dari 1 ke 2
// dan seterusnya
$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.produk_ulasan-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
        });
        }
    });
});
