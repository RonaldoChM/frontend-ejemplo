<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Actualizar Curso</h1>
            <div class="flex items-center justify-start">
                <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                                uppercase
                                hover:bg-blue-700
                                focus:bg-blue-700 focus:outline-none focus:ring-0
                                active:bg-blue-800
                                transition
                                duration-150
                                ease-in-out" to="/grades"> Listar Cursos</nuxt-link>
                </div>
            </div>
        <div class="w-full">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="uptade">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gradename">Nombre</label>
                    <input placeholder="Ingrese el nombre del curso" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gradename" type="text" v-model="grade.name"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gradelevel">Nivel</label>
                    <input placeholder="Ingrese el nivel" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gradelevel" type="text" v-model="grade.level"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gradehours">Horas</label>
                    <input placeholder="Ingrese las horas" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gradehours" type="text" v-model="grade.hours"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gradeteacher">Profesor</label>
                    <div class="flex ">
                        <div class="mb-3 xl:w-96">
                            <select class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                aria-label="Default select example"                        
                                v-model="grade.teacher_id">
                                <!-- <option selected>Selecciona un profesor</option> -->
                                <option 
                                v-for="teacher of teachers" 
                                :key="teacher.id" :id="teacher.id" 
                                :value="teacher.id">{{teacher.full_name}} - {{teacher.profession}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            
                <button class="rounded-r inline-block px-4 py-1.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" type="submit">Guardar</button>
            </form>
        </div>
        <!-- <div class="filteredListTeacher">
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
        </div>   -->

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
            },
            teachers:[],
            searchTeacher:[],
            searchDataTeacher: ''
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/grades/' + this.$route.params.id);
        this.grade = res.data;

        const res_t = await axios.get('http://127.0.0.1:8000/api/teachers');
            this.teachers = res_t.data;
            this.searchTeacher =this.teachers;
            console.log(this.teachers);
    },
    methods:{
        async uptade(){
            if(confirm("Desea actualizar el curso ")){
                const res = await axios.put('http://127.0.0.1:8000/api/grades/' + this.$route.params.id, this.grade)
                .then((res) =>{
                    console.log(res.data);
                    alert("Los datos del curso se actualizaron correctamente");
                    window.location.assign('http://localhost:3000/grades');
                }
                ) 
                .catch((error) => {
                    console.log(error);
                }
            )
            }
        }/* ,
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
            
        }, */
    }
}
</script>