let express = require('express');
let app = express();
const PORT = 3085;



app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})