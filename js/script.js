$( document ).ready(function() {
    $('.dialog-welcome')
        .typist({
            text: 'Sed ut perspiciatis, unde omnis ой, что-то пошло не так',
            speed: '20'
        })
        .typistPause(1000) // 2 sec
        .typistRemove(23)
        .typistAdd('iste natus error sit voluptatem accusantium doloremque laudantium.')
        .typistStop();
    
});