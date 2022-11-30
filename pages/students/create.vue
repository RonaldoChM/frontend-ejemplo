<template>
    <div>
        <h1>Crear estudiante</h1>
        <nuxt-link class="text-blue-600" to="/students"> Listar estudiantes</nuxt-link>

        <form @submit.prevent="save">
            <div>
                <label>Nombre</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.first_name"/>
            </div>
            <div>
                <label>Apellido</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.last_name"/>
            </div>
            <div>
                <label>edad</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.age"/>
            </div>
            <div>
                <label>Telefono</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.cell_phone"/>
            </div>
            <div>
                <label>Dirección</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="student.address"/>
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
                age: 0,
                cell_phone: '',
                address: '',
            }
        }
    },
    methods:{
        async save(){
            await axios.post('http://127.0.0.1:8000/api/students',this.student)
            .then((res) =>{
                console.log(res.data);
            }
            )
            .catch((error) => {
                xonsole.log(error);
            }
            )
        }
    } 
}
</script>