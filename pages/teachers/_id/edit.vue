<template>
    <div>
        <h1>Actualizar Profesores</h1>
        <nuxt-link to="/teachers"> Listar Profesores</nuxt-link>

        <form @submit.prevent="uptade">
            <div>
                <label>Nombre Completo</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.full_name"/>
            </div>
            <div>
                <label>Profecion</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.profession"/>
            </div>
            <div>
                <label>Grado Academico</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.grade_academy"/>
            </div>
            <div>
                <label>Telefono</label>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.cell_phone"/>
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
            teacher:{
                full_name: '',
                profession: '',
                grade_academy: 0,
                cell_phone: '',
            }
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/teachers/' + this.$route.params.id);
        this.teacher = res.data;       
    },
    methods:{
        async uptade(){
            
            if(confirm("Desea actualizar al Profesor ")){
                const res = await axios.put('http://127.0.0.1:8000/api/teachers/' + this.$route.params.id, this.teacher)
                .then((res) =>{
                    console.log(res.data);
                    alert('Los datos del profesor se actualizaron correctamente');
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