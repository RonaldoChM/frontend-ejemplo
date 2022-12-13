<template>
    <!--['name','level','hours','teacher_id']-->
    <div>
        <h1>Crear Curso</h1>
        <nuxt-link class="text-blue-600" to="/grades"> Listar Cursos</nuxt-link>

        <form @submit.prevent="save">
            <div>
                <label>Nombre</label>
                <input placeholder="Nombre de la materia" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.name"/>
            </div>
            <div>
                <label>Nivel</label>
                <input placeholder="nivel (p.e 1,2,3...n)" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.level"/>
            </div>
            <div>
                <label>Horas</label>
                <input placeholder="hrs academicas" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.hours"/>
            </div>
            <div>
                <!--poner un DROPBOX-->
                <label>Profesor</label>
                <input placeholder="Id profesor" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" v-model="grade.teacher_id"/>
            </div>

            <button class="rounded-full decoration-orange-600" type="submit">Guardar</button>
        </form>


        <div class="filteredListTeacher">
            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            type="search" 
            v-model="searchDataTeacher"
            placeholder="Buscar por nombre completo o grado academico..."
            v-on:keyup.enter="filteredListTeacher"/>
            
        </div>
       <div v-for="teacher in teachers">
            <p class="list">
                Id Profesor: {{teacher.id}}, Nombre: {{teacher.full_name}} - {{teacher.profession}}                    
            </p> 
            <hr/>        
        </div>  


    </div>
</template>
<script>
import axios from 'axios';
import Teacher from '../../components/Teacher.vue';
export default{
    data(){
        return{
            grade:{
                name: '',
                level: '',
                hours: '',
                teacher_id: '',
            },
            teachers:[],
            searchTeacher:[],
            searchDataTeacher: ''
        }
    }, async created(){
            const res_t = await axios.get('http://127.0.0.1:8000/api/teachers');
            this.teachers = res_t.data;
            this.searchTeacher =this.teachers;
            console.log(this.teachers);
    },
    methods:{
        async save(){
            if(confirm("Desea registrar el curso ' " + this.grade.name + " '")){
                await axios.post('http://127.0.0.1:8000/api/grades',this.grade)
                .then((res) =>{
                    console.log(res.data); 
                    this.grade.name = "";
                    this.grade.level = "";
                    this.grade.hours = "";
                    this.grade.teacher_id = "";
                    
                    alert("El curso se registro exitosamente");                    
                }
                )
                .catch((error) => {
                    console.log(error);
                    alert("Error:\n\t verifique que todos los campos este llenados correctamente");
                }
                )
            }
        },
        filteredListTeacher(){
            console.log("--------------------")
            if(this.searchDataTeacher == ''){
                return this.teachers = this.searchTeacher
            }else{
                
                this.teachers = this.searchTeacher.filter(teacher => 
                teacher.full_name.toLowerCase().replace(/\s+/g, '') === this.searchDataTeacher.toLowerCase().replace(/\s+/g, '')
                || teacher.profession.toLowerCase().replace(/\s+/g, '') === this.searchDataTeacher.toLowerCase().replace(/\s+/g, '')                
                );
                return this.teachers
            }
            
        },
    } 
}
</script>