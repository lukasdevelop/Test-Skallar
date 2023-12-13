// Arquivo responsável por iniciar o servidor Express

import { app } from './app'

// Inicia o servidor na porta especificada no ambiente
app.listen(process.env.PORT, () => console.log(`Server on at port ${process.env.PORT}`))