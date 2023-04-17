const express=require ('express');
const app = express();

app.use(express.json());
app.use(function(req,res,next){
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Methods","POST");
 res.header("Access-Control-Allow-Headers","Content-type");
next();
});
app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecuntandose en el puerto 3000");    
    }
);

app.post(
'/api/sumar',
(req,res)=>{
    console.log("Alguien está conectandose a esta ruta!!");
    const {numero_1, numero_2}=req.body;
    const resultado = parseFloat(numero_1)+parseFloat(numero_2);
    console.log(req.body);
    res.json(resultado);

}
);

app.post(
'/api/restar',
(req,res)=>{
    const {numero_1, numero_2}=req.body;
    const resultado = parseFloat(numero_1)-parseFloat(numero_2);
    console.log(req.body);
    res.json(resultado);

}
);
app.post(
    '/api/dividir',
    (req,res) =>{
        let resultado;
       try{
        const{numero_1,numero_2}=req.body;
        resultado=parseFloat(numero_1)/parseFloat(numero_2);
       }catch(error){
        resultado=error;
       }
        res.json(resultado);
       

    }
);
app.post(
    '/api/multiplicacion',
    (req,res) =>{
        let resultado;
       try{
        const{numero_1,numero_2}=req.body;
        resultado=parseFloat(numero_1)*parseFloat(numero_2);
       }catch(error){
        resultado=error;
       }
        res.json(resultado);
       

    }
);
