// mobile
 $('.mobile-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.mobile-popup').magnificPopup({
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

// web
$('.web-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.web-popup').magnificPopup({
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


// design
$('.design-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.design-popup').magnificPopup({
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


// report
$('.report-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.report-popup').magnificPopup({
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

// app
$('.app-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.app-popup').magnificPopup({
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

// certificate
$('.certificate-popup').magnificPopup({
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

$(document).ready(function() {
    var table = $('#example').dataTable({
    "fnDrawCallback": function () {
        $('.certificate-popup').magnificPopup({
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
