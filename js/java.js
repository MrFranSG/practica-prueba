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
    ObtenerP().then((personas)=> {
        console.log("c:");
        console.log(personas)

        let estructura = ""
        personas.forEach((p)=>{
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
        document.getElementById("cuerpotabla").innerHTML = estructura;
        personas.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDcorreo").value = p.correo;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("UPDfnacimiento").value = p.fechanacimiento;
                document.getElementById("btnActualizar").value = p.id;

            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if(confirm("Estas seguro que deseas eliminar a: \n"+p.nombre+" "+p.apellido)){
                    console.log("Eliminado sera entonces")
                    EliminarP(p.id).then(()=>{
                        alert("Ha sido eliminado")
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e);
                    })
                }else(
                    console.log("Operacion [Eliminar] Cancelada")
                )
            })
        })
    })
}

const actualizar = ()=>{
    let fNombre = document.getElementById("UPDnombre");
    let fApellido = document.getElementById("UPDapellido");
    let fRut = document.getElementById("UPDrut");
    let fCorreo = document.getElementById("UPDcorreo");
    let fEdad = document.getElementById("UPDedad");
    let fFnacimiento = document.getElementById("UPDfnacimiento");
    let vRut = fRut.value;
    let vApellido = fApellido.value;
    let vCorreo = fCorreo.value;
    let vEdad = fEdad.value;
    let vFnacimiento = fFnacimiento.value;
    let vNombre = fNombre.value;
    let objeto = {nombre:vNombre,apellido:vApellido,rut:vRut,correo:vCorreo,edad:vEdad,fechanacimiento:vFnacimiento}

    let id = document.getElementById("btnActualizar").value

    document.getElementById("btnActualizar").disabled = "true";

    ActualizarP(objeto,id).then(()=> {
        alert("Se actualizaron los datos con exito")
        cargarDatos();
        document.getElementById("btnActualizar").disabled = ""
    }).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
    })
    
}