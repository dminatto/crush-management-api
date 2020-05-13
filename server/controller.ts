import model from './model';

class Controller{
    constructor(){}

    getCrushs(req, res){
        return model.find({})
        .then(crushs => res.status(200).json({'result' : crushs}))
        .catch(err => res.status(400).json({'result' : err}))
    }

    detalhaCrush(req, res){
        return model.findById(req.params.id)
        .then(crushs => res.status(200).json({'result' : crushs}))
        .catch(err => res.status(400).json({'result' : err}))
    }
    
}

export default Controller;