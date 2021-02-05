const jwt = require('jsonwebtoken');

const myFunction =() =>{
    const token = jwt.sign({_id: 'abc123'}, "secret stored in env", {expiresIn: '1 day'});
    const data = jwt.verify(token, "secret stored in env" )
};

myFunction();