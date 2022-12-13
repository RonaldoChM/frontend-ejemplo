<template>
    <div>
        <h1>Actualizar Asignación</h1>
        <nuxt-link class="text-blue-600" to="/assignments"> Listar asignaciones</nuxt-link>
            
            <div v-for="box in boxes">
                <div>
                    <label>Curso actual: 
                        <p>Codigo: {{box.grade_id}}, Nombre: {{box.name}}</p>
                    </label>
                </div>

                <div>
                    <label>
                        Estudiante actual: 
                        <p>Matricula: {{box.student_id}}, Nombre: {{box.first_name}}, Apellido: {{box.last_name}}</p>
                    </label>         
                </div>                
                <hr/>
            </div>      
            <hr/>
        <!----------------------------------------------->
        <h2>Actualizar información</h2>
        <form @submit.prevent="uptade">
            <div>
                <label>curso</label>
                <input placeholder="Ingrese el codigo del curso..." class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                type="text" 
                v-model="assignment.grade_id"/>
            </div>
            <div>
                <label>estudiante</label>
                <input placeholder="Ingrese la matricula del estudiante" class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                type="text" 
                v-model="assignment.student_id"/>
            </div>
            
            <a v-on:click="uptade">Guardar</a>
        </form>
        
        <div id="line">
            <div>
                <div class="filteredListGrade">
                    <h2>Buscar Curso</h2>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                    type="search" 
                    v-model="searchDataGrade"
                    placeholder="Buscar curso..."
                    v-on:keyup.enter="filteredListGrade"/>
                    <!--<button type="reset" class="text-green-600" v-on:keyup.enter="filteredListGrade">buscar</button>-->
                </div>
                <div v-for="grade in grades">
                    <p class="list">
                        Codigo: {{grade.id}}, Nombre: {{grade.name}}
                    </p>      
                    <hr/>   
                </div>    
            </div>
                <!---------------------->
                
            <div>
                <div class="filteredListStudent">
                    <h2>Buscar estudiante</h2>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        type="search" 
                        v-model="searchDataStudent"
                        placeholder="Buscar estudiante..."
                        v-on:keyup.enter="filteredListStudent"/>
                        <!--<button type="reset"  class="text-green-600" v-on:keyup.enter="filteredListStudent">buscar</button>-->
                </div>
                <div v-for="student in students">
                    <p class="list">
                        Matricula: {{student.id}}, Nombre: {{student.first_name}} {{student.last_name}}                    
                    </p> 
                    <hr/>        
                </div>  
            </div>
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
                    //window.location.assign('http://localhost:3000/assignments');
                }
                ) 
                .catch((error) => {
                    console.log('Soy tu pesadilla');
                    console.log(error);
                }
            )
            }
        },
        filteredListStudent(){
            console.log("--------------------")
            if(this.searchDataStudent == ''){
                return this.students = this.searchStudent;
            }else{
                
                this.students = this.searchStudent.filter(student => 
                student.first_name.toLowerCase().replace(/\s+/g, '') === this.searchDataStudent.toLowerCase().replace(/\s+/g, '')
                || student.last_name.toLowerCase().replace(/\s+/g, '') === this.searchDataStudent.toLowerCase().replace(/\s+/g, '')
                || (student.first_name.toLowerCase()+student.last_name.toLowerCase()).replace(/\s+/g, '') === this.searchDataStudent.toLowerCase().replace(/\s+/g, '')  
                );
                return this.students
            }
            
        },
        filteredListGrade(){
            console.log("--------------------")
            if(this.searchDataGrade == ''){
                return this.grades = this.searchGrade;
            }else{
                
                this.grades = this.searchGrade.filter(grade => 
                grade.name.toLowerCase().replace(/\s+/g, '') === this.searchDataGrade.toLowerCase().replace(/\s+/g, '')
                );
                return this.grades
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