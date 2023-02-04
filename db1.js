const { Gamer } = require('./db/models')
const writeDb=async(name, scors) =>{ await Gamer.create({
    name:name,
    scores:scors
})

}

module.exports=writeDb