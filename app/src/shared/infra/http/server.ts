import { app } from './app'

app.listen(process.env.PORT, () => console.log(`Server on at port ${process.env.PORT}`))