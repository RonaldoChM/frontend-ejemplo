<template>
    <div>
        <h1>Crear estudiante</h1>
        <nuxt-link class="text-blue-600" to="/students"> Listar estudiantes</nuxt-link>

        <form @submit.prevent="save">
            <div>
                <label>Nombre</label>
                <input placeholder="Ingrese el nombre" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.first_name"/>
            </div>
            <div>
                <label>Apellido</label>
                <input placeholder="Ingrese el apellido" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.last_name"/>
            </div>
            <div>
                <label>edad</label>
                <input placeholder="Ingrese la edad" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.age"/>
            </div>
            <div>
                <label>Telefono</label>
                <input placeholder="Ingrese el telefono" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.cell_phone"/>
            </div>
            <div>
                <label>Dirección</label>
                <input placeholder="Ingrese la dirección" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.address"/>
            </div>
            <button class="rounded-full decoration-orange-600" type="submit">Guardar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            student:{
                first_name: '',
                last_name: '',
                age: '',
                cell_phone: '',
                address: '',
            }
        }
    },
    methods:{
        async save(){
            if(confirm("Desea registrar al estudiante ' " + this.student.first_name + " " + this.student.last_name + " '")){ 
                await axios.post('http://ejemplo1.test/api/students',this.student)
                /* await axios.post('http://127.0.0.1:8000/api/students',this.student) */
                .then((res) =>{
                    console.log(res.data);
                    this.student.first_name = "";
                    this.student.last_name = "";
                    this.student.age = 0;
                    this.student.cell_phone = "";
                    this.student.address = "";
                    alert('El estudiante se registro exitosamente');
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error:\n\t verifique que todos los campos este llenados correctamente");
                })
            }
            
        }
    } 
}
</script>