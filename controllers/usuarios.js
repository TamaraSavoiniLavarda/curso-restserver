const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg : 'GET API desde el controlador',
        q,
        nombre,
        apikey
    });
};

const usuariosPost = (req, res = response) => {

    const {title, director} = req.body;

    res.json({
        msg : 'POST API desde el controlador',
        title,
        director
    });
};

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg : 'PUT API desde el controlador',
        id
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg : 'DELETE API desde el controlador'
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg : 'PATCH API desde el controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}