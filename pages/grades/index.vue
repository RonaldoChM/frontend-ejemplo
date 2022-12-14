<template>
    <div>
        <!--['name','level','hours','teacher_id']-->
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Vista Cursos</h1>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/students">Ver Estudiantes</nuxt-link>
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/teachers">Ver Profesores</nuxt-link>
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/assignments">Ver Asignaciones</nuxt-link>

                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/grades/create">crear nuevo Curso</nuxt-link>
            </div>
        </div>
<!--         <Grade 
            v-for="grade of grades"
            :key="grade.id"
            :id="grade.id"
            :name="grade.name"
            :level="grade.level"
            :hours="grade.hours"
            :full_name="grade.full_name"    
           
        />   -->
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Id</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Materia</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nivel</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Docente</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="grade of grades" :key="grade.id" :id="grade.id"
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{grade.id}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{grade.name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{grade.level}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{grade.full_name}}</td>                                
                                <td>
                                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="toolbar">
                                        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">                                            
                                            <Grade                                
                                                :key="grade.id"
                                                :id="grade.id"                                                
                                            />
                                        </div>
                                    </div>                                                                        
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios';
import Grade from '../../components/Grade.vue';
    export default{
        data(){
            return{
                grades: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            const res = await axios.get('http://127.0.0.1:8000/api/grades');
            this.grades = res.data;
            console.log(this.grades);
        }
    } 
</script>