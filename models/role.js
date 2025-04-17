const mongoos =require('mongoose');

const roleSchema =new mongoos.Schema({
    name: {type:String ,required:true,unique:true},

});

module.exports =mongoos.model('Role',roleSchema)