
const db = require('./database')

const game = require('./GameService')

const getUserById = (id) => {
    return db.user.findOne({ _id: id })
}

const getUserLibrary = (id) => {
    let ids = []
    return getUserById(id).then((user) => {
        
        user.library_ids.map(el => {
            ids.push(String(el))
        })
        console.log(ids)
        return ids
    }).then((arr) => {
        console.log(arr)
        return db.game.find({ '_id': { $in: arr } })
            .then((data) => { return data }).catch((err) => { return [] })
    })
        .catch((err) => { return [] })
}

const getUserByEmail = (email) => {
    return db.user.findOne({ email: email.toLowerCase() })
}
const insertUser = (
    nick,
    email,
    password,
    blocked,
    picture,
    privileges,
    blockade_expiration_date,
    library_ids) => {
    return db.user.create({
        nick: nick,
        email: email,
        password: password,
        blocked: blocked,
        picture: picture,
        privileges: privileges,
        blockade_expiration_date: blockade_expiration_date,
        library_ids: library_ids
    })
}


const updateUser = (
    where,
    update
) => {
    return db.user.findOneAndUpdate(
        where,
        update
    )
}

const deleteUser = (
    where
) => {
    return db.user.deleteOne(
        where
    )
}

module.exports={
    deleteUser,
    updateUser,
    insertUser,
    getUserByEmail,
    getUserById,
    getUserLibrary,
    
}