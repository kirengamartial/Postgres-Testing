const getUsers = 'SELECT * FROM users'
const singleUser = 'SELECT * FROM users WHERE id = $1'
const checkEmail = 'SELECT email FROM users WHERE email = $1'
const postUser = 'INSERT INTO users(name, email, age) VALUES($1, $2, $3)'
const editUser = 'UPDATE users SET name = $1 WHERE id = $2'
const deleteUser = 'DELETE FROM users WHERE id = $1'


module.exports = {
    getUsers,
    singleUser,
    checkEmail,
    postUser,
    editUser,
    deleteUser
}