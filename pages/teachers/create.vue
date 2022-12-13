<template>
    <!--['full_name','profession','grade_academy','cell_phone'];-->
    <div>
        <h1>Crear Profesor</h1>
        <nuxt-link class="text-blue-600" to="/teachers"> Listar Profesores</nuxt-link>

        <form @submit.prevent="save">
            <div>
                <label>Nombre completo</label>
                <input id="full_name" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.full_name"/>
            </div>
            <div>
                <label>Profecion</label>
                <input id="profession" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.profession"/>
            </div>
            <div>
                <label>Grado Academico</label>
                <input id="grade_academy" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.grade_academy"/>
            </div>
            <div>
                <label>Telefono</label>
                <input id="cell_phone" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="teacher.cell_phone"/>
            </div>
        
            <button class="text-green-600" type="submit">Guardar</button>
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
    methods:{
        async save(){
            if(confirm("Desea registrar al profesor ' " + this.teacher.full_name + " '")){
                await axios.post('http://127.0.0.1:8000/api/teachers',this.teacher)
                .then((res) =>{
                    console.log(res.data);

                    this.teacher.full_name = "";
                    this.teacher.profession = "";
                    this.teacher.grade_academy = 0;
                    this.teacher.cell_phone = "";

                    alert('El profesor se registro exitosamente');
                }
                )
                .catch((error) => {
                    console.log(error);
                    alert("Error:\n\t verifique que todos los campos este llenados correctamente");
                }
                )
            }
        }
    } 
}
</script>