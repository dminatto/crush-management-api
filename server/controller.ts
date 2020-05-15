import model from './model';

class Controller {
    constructor() { }

    getCrushs(req, res) {
        return model.find({})
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }))
    }

    detalhaCrush(req, res) {
        return model.findById(req.params.id)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }))
    }

    createCrush(req, res) {
        return model.create(req.body)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }))
    }

    updateCrush(req, res) {
        return model.findOneAndUpdate(req.params.id, req.body)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }))
    }

    deletaCrush(req, res) {
        return model.deleteOne(req.params.id)
            .then(crushs => res.status(200).json({ 'result': "Crush Deletado" }))
            .catch(err => res.status(400).json({ 'result': err }))
    }
}

export default Controller;