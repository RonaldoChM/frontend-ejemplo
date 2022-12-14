<template>
    <!--['full_name','profession','grade_academy','cell_phone'];-->
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Crear Profesor</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                                uppercase
                                hover:bg-blue-700
                                focus:bg-blue-700 focus:outline-none focus:ring-0
                                active:bg-blue-800
                                transition
                                duration-150
                                ease-in-out" to="/teachers"> Listar Profesores</nuxt-link>
            </div>
        </div>
        <form @submit.prevent="save">
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="teacherfullname">Nombre Completo</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="teacherfullname" type="text" placeholder="Ingresa Nombre Completo" v-model="teacher.full_name"/>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="teacherprofession">Profecion</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="teacherprofession" type="text" placeholder="Ingresa la profesion" v-model="teacher.profession"/>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="teachergradeacademy">Grado Academico</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="teachergradeacademy" type="text" placeholder="Ingresa el grado" v-model="teacher.grade_academy"/>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="teachercellphone">Telefono</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="teachercellphone" type="text" placeholder="Ingresa el telegono" v-model="teacher.cell_phone"/>
            </div>
        
            <button class="rounded-r inline-block px-4 py-1.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out" type="submit">Guardar</button>
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
                grade_academy: '',
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
                    this.teacher.grade_academy = '';
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