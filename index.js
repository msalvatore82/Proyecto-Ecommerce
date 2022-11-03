const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use("/clients",require("./routes/clients"));
app.use("/products", require("./routes/products"));
app.use("/categorys", require("./routes/categorys"))
app.use("/orders", require("./routes/orders"))
// app.use("/cesta", require("./routes/cesta"))


app.listen(PORT,()=>console.log(`Servidor levantado en el puerto ${PORT}`))