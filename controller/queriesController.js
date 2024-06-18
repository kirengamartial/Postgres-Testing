const db = require('../db')
const queries = require('../queries/queriy')

const getUsers = (req, res) => {
db.query(queries.getUsers,(err, results) => {
    if(err) res.send(err)
    res.status(200).json(results.rows)
    console.log(results)
})
}

const getSingleUser = (req, res) => {
    const { id } = req.params
db.query(queries.singleUser, [id], (err, results) =>{
    if(err) throw err
    res.status(200).json(results.rows)
    console.log(results)
})
}

const createUser = (req, res) => {
    const {name, email, age} = req.body
    db.query(queries.checkEmail, [email], (err, results) => {
        if(results.rows.length) {
            res.status(401).json({error:'user with this email already exists', data:results.rows})
        }


        db.query(queries.postUser, [name, email, age],(err, results) => {
            if(err) res.status(500).json(err)
            res.status(200).json(results)
        })
    } )
}

const editUser = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    db.query(queries.singleUser, [id], (err, results) => {
        if(!results.rows.length) res.status(500).json('that user does not exists')

        db.query(queries.editUser,[name, id], (err, results) => {
            if(err) throw err
            res.status(200).json(results)
        })
    })
 }
 const deleteUser = (req, res) => {
    const { id } = req.params

    db.query(queries.singleUser, [id], (err, results) => {
        if(!results.rows.length) res.status(500).json('that user does not exist')

        db.query(queries.deleteUser,[id], (err, results) => {
            if(err) throw err
            res.status(200).json('deleted successfully')
        })
    })
 }

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    editUser,
    deleteUser
}