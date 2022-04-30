const thinking= require("../app/controller/thinking_controller");
const express= require("express");
const app= express();
app.use(express.json());
const port= 3000;

app.get("/", (request, response) => {
    response.json({message: "Thinking Api welcome!"});
});

app.get("/v1/students/users",(request, response) => {
    response.json(thinking.userThinking());
})
//mostrar los certificados
app.get("/v1/students/certifications",(request, response) => {
    response.json(thinking.certificationThinking());    
})
//mostrar los creditos
app.get("/v1/students/credits",(request, response) => {
    response.json(thinking.creditsThinking());    
})

app.listen(port, () => {
    console.log(`Thinking API in localhost:${port}`);
})
