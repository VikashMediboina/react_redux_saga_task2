const express = require('express');

const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.get('/',(req,res,next)=>{
    setTimeout(()=>res.json({data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum. Proin nibh nisl condimentum id venenatis a condimentum vitae. Netus et malesuada fames ac turpis egestas. Arcu ac tortor dignissim convallis aenean et tortor. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris in aliquam sem fringilla ut morbi. Massa enim nec dui nunc mattis. Felis eget nunc lobortis mattis aliquam faucibus purus in. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Viverra aliquet eget sit amet tellus cras adipiscing enim. In mollis nunc sed id semper risus in. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Volutpat ac tincidunt vitae semper quis. Nunc sed id semper risus in. Magna sit amet purus gravida quis blandit turpis cursus. Sodales ut eu sem integer vitae justo eget magna fermentum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. In arcu cursus euismod quis viverra.\n Vitae nunc sed velit dignissim sodales ut. Feugiat in fermentum posuere urna. Gravida rutrum quisque non tellus. Molestie ac feugiat sed lectus. Luctus accumsan tortor posuere ac ut consequat. Massa placerat duis ultricies lacus sed turpis tincidunt id. At augue eget arcu dictum varius duis. Nisi est sit amet facilisis magna etiam tempor orci eu. Augue lacus viverra vitae congue eu. Diam quam nulla porttitor massa id. At tellus at urna condimentum mattis pellentesque id nibh."}),
    1000)
} );



app.listen(4000);
console.log("Server listening in port 4000");