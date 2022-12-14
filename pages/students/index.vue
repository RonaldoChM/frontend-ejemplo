<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Estudiantes</h1>

        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link href="#" class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/grades">Ver Cursos
                </nuxt-link>

                <nuxt-link href="#" class="px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/teachers">Ver Profesores
                </nuxt-link>

                <nuxt-link href="#" class="px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/assignments">Ver Asignaciones
                </nuxt-link>

                <nuxt-link href="#" class="rounded-r
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/students/create">crear nuevo
                </nuxt-link>

            </div>
        </div>

        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Apellido</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Edad</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Celular</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Dirección</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student of students" :key="student.id" :id="student.id"
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{student.first_name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{student.last_name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{student.age}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{student.cell_phone}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{student.address}}</td>
                                <td>
                                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="toolbar">
                                        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">                                            
                                            <Student                                
                                                :key="student.id"
                                                :id="student.id"                                                
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
import Student from '../../components/Student.vue';
    export default{
        data(){
            return{
                students: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
           /* const res = await axios.get('http://ejemplo1.test/api/students');*/
            const res = await axios.get('http://127.0.0.1:8000/api/students'); 
            this.students = res.data;
            console.log(this.students);
        }
    } 
</script>
