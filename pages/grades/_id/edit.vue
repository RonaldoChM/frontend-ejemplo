<template>
    <div>
        <h1>Actualizar estudiante</h1>
        <nuxt-link class="text-blue-600" to="/grades"> Listar estudiantes</nuxt-link>

        <form @submit.prevent="uptade">
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
                <label>Profesor_id</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.teacher_id"/>
            </div>
            <div>
                <label>Profesor</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.full_name"/>
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
                teacher_id: 0,
                full_name:'',
            }
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/grades/' + this.$route.params.id);
        this.grade = res.data;
    },
    methods:{
        async uptade(){
            if(confirm("Desea actualizar el curso ")){
                const res = await axios.put('http://127.0.0.1:8000/api/grades/' + this.$route.params.id, this.grade)
                .then((res) =>{
                    console.log(res.data);
                    alert("Los datos del curso se actualizaron correctamente");
                }
                ) 
                .catch((error) => {
                    console.log(error);
                }
            )
            }
        }
    }
}
</script>