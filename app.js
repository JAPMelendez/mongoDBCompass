const mongoose = require('mongoose');

const url = 'mongodb://localhost/boardGameBDD';

mongoose.connect(url, {})
    .then(() => console.log("Conectando a MongoDB"))
    .catch((error)=>console.log("error" + error));

const boardGamesSchema = mongoose.Schema({
    name: String,
    players: String,
    category: String
});

const BoardGameModel = mongoose.model('boardgames', boardGamesSchema);

//Crear (CREATE)
const create = async ()=>{
    const boardGame = new BoardGameModel({
        name: "Resident evil",
        players: "1-4",
        category: "horror"
    });

    const result = await boardGame.save();
    console.log(result);
}

//Actualizar (UPDATE)
const update = async (id)=>{
    const boardGame = await BoardGameModel.updateOne({_id:id}, 
        {
            $set:
            {
                name: "Nemesis"
            }
        })
}

//Mostrar (READ)
const show = async ()=>{
    const boardGame = await BoardGameModel.find()
    console.log(boardGame);
};


//Eliminar (DELETE) 
const deleteGame = async (id)=>{
    const boardGame = await BoardGameModel.deleteOne({_id:id})
    console.log(boardGame);
}

//create();
//update('6330de0d76479694d1ca4fae');
//deleteGame('6330e3c883ddd42e54977d79')
//show();