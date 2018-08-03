const express = require('express');
const app = express();
const routes = express.Router();
const CONFIF = require('../config/constantes');

let Personas = require('../models/personas');

routes.route('/add').post(function (req, res) {
    let persona = new Personas(req.body);
    persona.save()
        .then(game => {
            res.status(200).json({'persona': 'Persona agregada correctamente'});
        })
        .catch(err => {
            res.status(400).send("Error al añadir el registro.");
        });
});

routes.route('/').get(function (req, res) {

    let perPage = parseInt(req.param('perPage') || CONFIF.PER_PAGE);
    let page = parseInt(req.param('page') || CONFIF.PAGE);

    Personas
        .find(function (err, personas) {
            if (err) {
                console.log(err);
            }
            else {
                Personas.countDocuments(function (err, total) {
                    var response = {
                        personas: personas,
                        count: total,
                        perPage: perPage,
                        page: page
                    }
                    res.json(response);
                })
            }
        })
        .skip((perPage * page) - perPage)
        .limit(perPage);

});

routes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Personas.findById(id, function (err, persona) {
        res.json(persona);
    });
});

routes.route('/update/:id').post(function (req, res) {
    Personas.findById(req.params.id, function (err, persona) {
        if (!persona)
            return next(new Error('Error al recuperar el registro'));
        else {
            persona.nombre = req.body.nombre;

            persona.save().then(persona => {
                res.json('Update completado');
            })
                .catch(err => {
                    res.status(400).send("Error al actualizar el registro.");
                });
        }
    });
});

routes.route('/delete/:id').get(function (req, res) {
    Personas.findByIdAndRemove({_id: req.params.id}, function (err, persona) {
        if (err) res.json(err);
        else res.json('Eliminado correctamente');
    });
});

routes.route('/init').get(function (req, res) {

    var inserts = 0;
    var registros = parseInt(req.param('total')) || 100;
    var errores = 0;

    for (var i = 0; i < registros; i++) {
        let persona = new Personas({nombre: "Nombre " + i, apellido: "Apellido " + i, edad: i});
        persona.save()
            .then(game => {
                inserts++;
                if (inserts === registros && errores == 0)
                    res.status(200).json({'personas': 'Se han agregado ' + registros + ' registros correctamente.'});
                if (inserts === registros && errores > 0) {
                    res.status(400).send('Error al añadir ' + errores + ' registros.');
                }
            })
            .catch(err => {
                inserts++;errores++;
                if (inserts === registros)
                    res.status(400).send('Error al añadir ' + errores + ' registros.');
            });
    }

});

module.exports = routes;
