import { db } from "./firebase.js";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
export const RegistrarP = async ()=>{
    const docRef = addDoc(collection(db, "practica"), practica);;
}

export const obtenerPersonas = async()=>{
    const ref = collection(db, "practica");
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc)=>{
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}
export const ActualizarP = async(objeto,id)=>{
    const ref = doc(db, "practica", id);
    await updateDoc(ref, objeto)


}
export const EliminarP = async(id)=>{
    const ref = doc(db, "practica", id);
    await deleteDoc(ref);
}
