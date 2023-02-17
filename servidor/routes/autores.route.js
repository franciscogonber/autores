const Controlador = require ("../controllers/autores.controller");
module.exports = app => {
    app.get("/api/autores", Controlador.obtenerTodos);
    app.get("/api/autores/:id", Controlador.obtenerUno);
    app.post("/api/autores/new", Controlador.crear);
    app.put("/api/autores/:id/edit", Controlador.actualizar);
    app.delete("/api/autores/delete/:id", Controlador.eliminar);
}