<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Crear Registro de curso-estudiante</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                                uppercase
                                hover:bg-blue-700
                                focus:bg-blue-700 focus:outline-none focus:ring-0
                                active:bg-blue-800
                                transition
                                duration-150
                                ease-in-out" to="/assignments"> Ver listas</nuxt-link>
            </div>
        </div>
        <div class="w-full">
            <form @submit.prevent="save" @reset.prevent="filteredListGrade">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="assignmentgrade_id">Curso</label>
                 
                    <!-- <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    type="text" 
                    placeholder="Ingrese el codigo de la materia..."
                    v-model="assignment.grade_id"/>   --> 
                    <div class="flex">
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
                                v-model="assignment.grade_id"
                                placeholder="Selecciona un Curso">
                                <!-- <option selected>Selecciona un Curso</option> -->
                                <option v-for="grade of grades" 
                                :key="grade.id" 
                                :id="grade.id" 
                                :value="grade.id">{{grade.id}} - {{grade.name}}</option>
                            </select>
                        </div>       
                    </div>               
                </div>
                
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="assignmentstudent_id">Seleccionar Estudiante</label>
                    <!-- <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    type="text" 
                    v-model="assignment.student_id"
                    placeholder="Ingrese la matricula del estudiante..."/> -->
                    <div class="flex">
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
                                v-model="assignment.student_id"
                                placeholder="Selecciona un estudiante">
                                <!-- <option selected>Selecciona un estudiante</option> -->
                                <option 
                                v-for="student of students" 
                                :key="student.id" 
                                :id="student.id" 
                                :value="student.id">
                                {{student.id}} - {{student.first_name}} {{student.last_name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>    
                <button class="rounded-full text-purple-600" type="submit">Guardar</button>
                <hr/>
            </form>
        </div>
       <!---------------------->

    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            assignment:{
                grade_id: '',
                student_id: '',
            },
            students:{},
            searchStudent:[],
            searchDataStudent: '',
            grades:{},
            searchGrade:[],
            searchDataGrade: ''
        }
    },
     async created(){
            const res_std = await axios.get('http://127.0.0.1:8000/api/students');
            this.students = res_std.data;
            this.searchStudent =this.students;
            console.log(this.students);

            const res_g = await axios.get('http://127.0.0.1:8000/api/grades');
            this.grades = res_g.data;
            this.searchGrade =this.grades;
            console.log(this.grades);
    },

            

    methods:{
        async save(){
            if(confirm("Desea asignar la clase")){ 
                await axios.post('http://127.0.0.1:8000/api/assignments',this.assignment)
                .then((res) =>{
                    console.log(res.data);
                    console.log(this.assignment.grade_id,
                    this.assignment.student_id)

                    this.assignment.grade_id = '';
                    this.assignment.student_id = '';
                    alert('Registro exitosamente');
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
