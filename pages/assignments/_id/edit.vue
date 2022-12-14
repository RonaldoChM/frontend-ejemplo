<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Actualizar Asignación</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                                uppercase
                                hover:bg-blue-700
                                focus:bg-blue-700 focus:outline-none focus:ring-0
                                active:bg-blue-800
                                transition
                                duration-150
                                ease-in-out" to="/assignments"> Listar asignaciones</nuxt-link>
            </div>
        </div>
            <!-- <div v-for="box in boxes">
                <div>
                    <label>Curso actual: 
                        <p>Codigo: {{box.grade_id}}, Nombre: {{box.name}}</p>
                    </label>
                </div>

                <div>
                    <label>
                        Estudiante actual: 
                        <p>Matricula: {{box.student_id}}, Nombre: {{box.first_name}} {{box.last_name}}</p>
                    </label>         
                </div>                
                <hr/>
            </div>  -->     
            <hr/>
        <!----------------------------------------------->
        <div class="w-full">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="uptade">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="assignmentgrade_id">Curso</label>
                    <p 
                    v-for="box in boxes" 
                    v-bind:value="box.value">
                        Clase actual: {{box.grade_id}} - {{box.name}}
                    </p>   
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
                                v-model="assignment.grade_id">
                                <!-- <option selected>Selecciona un profesor</option> -->
                                <option v-for="grade of grades" 
                                :key="grade.id" 
                                :id="grade.id" 
                                :value="grade.id">{{grade.id}} - {{grade.name}}
                                </option>
                            </select>
                        </div>
                    </div>

                    <label class="block text-gray-700 text-sm font-bold mb-2" for="assignmentstudent_id">Estudiante</label>
                    <p 
                    v-for="box in boxes" 
                    v-bind:value="box.value">
                    Estudiante Actual: {{box.student_id}}, Nombre: {{box.first_name}} {{box.last_name}}
                    </p>   
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
                                v-model="assignment.student_id">
                                <!-- <option selected>Selecciona un profesor</option> -->
                                <option v-for="student of students" 
                                :key="student.id" 
                                :id="student.id" 
                                :value="student.id">
                                {{student.id}} - {{student.first_name}} {{student.last_name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="rounded-r inline-block px-4 py-1.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" type="submit">Guardar</button>
            </form>
        </div>     
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            assignment:{
                student_id: '',
                grade_id: ''
            },
            boxes:{},
            students:{},
            searchStudent:[],
            searchDataStudent: '',
            grades:{},
            searchGrade:[],
            searchDataGrade: ''
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id);
        this.assignments = res.data;
        this.boxes = this.assignments;

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
        async uptade(){

            if(confirm("Desea actualizar la asignación ",
            )){
                const res = await axios.put('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id, this.assignment)                

                .then((res) =>{
                    console.log(res.data);
                    alert("Los datos del curso se actualizaron correctamente");
                    location.reload()
                    window.location.assign('http://localhost:3000/assignments');
                }
                ) 
                .catch((error) => {
                    console.log('Soy tu pesadilla');
                    console.log(error);
                }
            )
            }
        }
    }
}
</script>
<style>
#line{
    display: flex; justify-content: space-evenly; ;
}
</style>