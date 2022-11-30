<template>
    <!--['name','level','hours','teacher_id']-->
    <div>
        <h1>Crear estudiante</h1>
        <nuxt-link class="text-blue-600" to="/grades"> Listar Cursos</nuxt-link>

        <form @submit.prevent="save">
            <div>
                <label>Nombre</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.name"/>
            </div>
            <div>
                <label>Nivel</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.level"/>
            </div>
            <div>
                <label>Horas</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.hours"/>
            </div>
            <div>
                <label>Profesor</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.teacher_id"/>
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
            grade:{
                name: '',
                level: '',
                hours: 0,
                teacher_id: '',
            }
        }
    },
    methods:{
        async save(){
            await axios.post('http://127.0.0.1:8000/api/grades',this.grade)
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