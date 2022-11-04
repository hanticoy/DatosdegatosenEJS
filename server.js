const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Esto establece la ubicación donde Express buscará por vistas EJS
app.set('views', __dirname + '/views'); 
//Al usar ejs, todas las paginas deben tene extension .ejs porque el motor las toma solo en ese formato
// Ahora establezcamos el motor de vista para que Express sepa que estamos usando EJS al contrario de otro motor de plantilla como Jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // datos del usuario codificados
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});

app.get("/gatos", function(request, response) {
    response.render("gatos")
})
app.get("/cuddles", function(request, response) {
    var gato1_array = [
        {favoriteFood: "spaguetti", Age:5, sleeping:"Uder Bed" } 
    ];
    var gato2_array = [
        {favoriteFood: "Atun", Age:7, sleeping:"in the bathrom" } 
    ];
    var gato3_array = [
        {favoriteFood: "chiken", Age:3, sleeping:"in the livin.." } 
    ];

    if (request.query.id == 'gato1'){
        response.render("cuddles", {cats: gato1_array})
    
    }else  if (request.query.id == 'gato2'){
        response.render("cuddles", {cats: gato2_array})
    
    } else  if (request.query.id == 'gato3'){
        response.render("cuddles", {cats: gato3_array})
    }
   
})


app.listen(8000, function() {
    console.log('Aplicacion iniciada escuchando en http://localhost:8000');
});