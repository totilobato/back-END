class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = "Tati Belen";
        this.apellido = "Lobato";
        this.libros = [
            {name:"El principe de Persia", autor:"Jhonny Deep"}, 
            {name:"Narnia", autor:"Tom Cruise"}
                    ];
        this.mascotas = ["Melba, Biscuit"];
    }

    getFullName (){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota (){
    this.mascotas.push("Malvavisco")
    return `${this.mascotas}`;
    }
    countMascotas(){
        return `${this.mascotas.length}`;
    }
    addBook(){
        this.libros.push(
            {name:"Harry Potter", autor:"Augusto Lobato"}
            )
            return `${this.libros}`
    }
    getBookNames = () => {
        let nombresLibros = this.libros.map(libro=>{
            return  libro.name;
        })
        return [nombresLibros];
    }
}
const nuevoUsuario = new Usuario ("Santiago", "Lobato", [{name: "Shrek", autor: "Benicio del Toro"}], ["Titi", "Doris"]);

console.log(nuevoUsuario);
nuevoUsuario.addMascota();
nuevoUsuario.addBook();
console.log(nuevoUsuario.countMascotas());
console.log(nuevoUsuario.getBookNames());



