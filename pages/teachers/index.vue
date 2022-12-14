<template>
    <!--['full_name','profession','grade_academy','cell_phone'];>-->
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Vista Profesores</h1>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/grades">Ver Cursos</nuxt-link>
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
                    ease-in-out" to="/assignments">Ver Asignaciones</nuxt-link>

                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/teachers/create">crear nuevo Profesor</nuxt-link>
            </div>
        </div>
        <!-- <Teacher 
            v-for="teacher of teachers"
            :key="teacher.id"
            :id="teacher.id"
            :full_name="teacher.full_name" 
            :profession="teacher.profession"
            :grade_academy="teacher.grade_academy"
            :cell_phone="teacher.cell_phone"
        />  -->      
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre Completo</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Preofesion</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Grado academico</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Celular</th>                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="teacher of teachers" :key="teacher.id" :id="teacher.id"
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{teacher.full_name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{teacher.profession}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{teacher.grade_academy}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{teacher.cell_phone}}</td>
                                <td>
                                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="toolbar">
                                        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">                                            
                                            <Teacher                                
                                                :key="teacher.id"
                                                :id="teacher.id"                                                
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
import Teacher from '@/components/Teacher';
    export default{
        data(){
            return{
                teachers: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            /* const res = await axios.get('http://ejemplo1.test/api/teachers');*/
            const res = await axios.get('http://127.0.0.1:8000/api/teachers'); 
            this.teachers = res.data;
            console.log(this.teachers);
        }
    }
</script>