import express, { response } from 'express';
import './database'

const app = express();

app.post('/users', (req, res) => {
    return res.json({ message: 'Usuário gravado com sucesso'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})