var express = require('express');
var router = express.Router();
import { CounterService } from "./counter.service";
import { CounterDao } from "../repository/counter.repository";

const repository = new CounterDao()
const service = new CounterService(repository);

router.post('/', async function(req, res) {
    try {
        const result = await service.createCounter();
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.delete('/', async function(req, res) {
    try {
        const result = await service.deleteCounter(req.id);
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.get('/last', async function(req, res) {
    try {
        const result = await service.getLastCounter();
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.get('/:id', async function(req, res) {
    try {
        const result = await service.getCounter(req.params.id);
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.patch('/increment', async function(req, res) {
    try {
        const result = await service.incrementCounter();
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.patch('/decrement', async function(req, res) {
    try {
        const result = await service.decrementCounter();
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});

router.patch('/reset', async function(req, res) {
    try {
        const result = await service.resetCounter();
        res.send({result: result});    
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
});


module.exports = router;