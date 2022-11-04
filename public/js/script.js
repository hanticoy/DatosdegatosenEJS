let cats = document.querySelectorAll('#cats')

cats.forEach(element => {
    //console.log(element.getAttribute('name'));
    element.addEventListener('click', function(){
        window.location.href = '/cuddles?id=' + element.getAttribute('name');
    })
});
