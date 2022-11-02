const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use("/clients",require("./routes/client"));
// app.use("/productos", require("./routes/productos"))
// app.use("/categorias", require("./routes/categorias"))
// app.use("/pedidos", require("./routes/pedidos"))
// app.use("/cesta", require("./routes/cesta"))


app.listen(PORT,()=>console.log(`Servidor levantado en el puerto ${PORT}`))