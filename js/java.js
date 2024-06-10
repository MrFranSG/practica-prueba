import { ActualizarP, EliminarP, ObtenerP, RegistrarP } from "./promesa.js";
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click",actualizar);

})

const registrar = ()=>{
    let fNombre = document.getElementById("nombre");
    let fApellido = document.getElementById("apellido");
    let fRut = document.getElementById("rut");
    let fCorreo = document.getElementById("correo");
    let fEdad = document.getElementById("edad");
    let fFnacimiento = document.getElementById("fnacimiento");
    let vRut = fRut.value;
    let vApellido = fApellido.value;
    let vCorreo = fCorreo.value;
    let vEdad = fEdad.value;
    let vFnacimiento = fFnacimiento.value;
    let vNombre = fNombre.value;
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,edad:vEdad,fechanacimiento:vFnacimiento}
    RegistrarP(objeto).then(()=>{
        alert("Se ha registrado.")
        cargarDatos();
        }).catch((error)=>(
            console.log(error)
    ));

    
}

const cargarDatos = ()=>{
    ObtenerP().then((practica)=> {
        console.log("hey");
        console.log(practica)

        let estructura = ""
        practica.foreach((p)=>{
            estructura += "<tr>"
            estructura += "<td>"+p.nombre+"<td>"
            estructura += "<td>"+p.apellido+"<td>"
            estructura += "<td>"+p.rut+"<td>"
            estructura += "<td>"+p.correo+"<td>"
            estructura += "<td>"+p.edad+"<td>"
            estructura += "<td>"+p.fechanacimiento+"<td>"
            estructura += "<td><button id='UPD"+p.id+"'>Actualizar</button></td>"
            estructura += "<td><button id='DEL"+p.id+"'>Eliminar</button></td>"
            estructura += "</tr>";
        })
        
    })
}