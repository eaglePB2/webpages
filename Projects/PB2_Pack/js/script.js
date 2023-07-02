function DeactivateAll() {
    $('#modlist').children().each(function () {
        $(this).removeClass('room_active');
    });
}

function ActivateChannel(id) {
    $('#' + id).addClass('room_active');
    var sites = ['mod_showcase/mod_template.html', 'mod_showcase/mod1.html', 'mod_showcase/mod2.html', 'mod_showcase/mod3.html', 'mod_showcase/mod4.html', 'mod_showcase/mod5.html', 'mod_showcase/mod6.html', 'mod_showcase/mod7.html']
    document.getElementById('modpage').src = sites[id]
    //ToDo
}