<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Actualizar estudiante</h1>
            <div class="flex items-center justify-start">
                <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                                uppercase
                                hover:bg-blue-700
                                focus:bg-blue-700 focus:outline-none focus:ring-0
                                active:bg-blue-800
                                transition
                                duration-150
                                ease-in-out" to="/students"> Listar estudiantes
                    </nuxt-link>
                </div>
            </div>
         <div class="w-full">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="uptade">
                
                <div class="relative z-0">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="namestudent">Nombre</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="namestudent" type="text" placeholder="Ingrese el nombre" v-model="student.first_name"/>                
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="lastnamestudent">Apellido</label>
                    <input placeholder="Ingrese el apellido" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastnamestudent" type="text" v-model="student.last_name"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="agestudent">edad</label>
                    <input placeholder="Ingrese la edad" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agestudent" type="text" v-model="student.age"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="cellphonestudent">Telefono</label>
                    <input placeholder="Ingrese el telefono" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cellphonestudent" type="text" v-model="student.cell_phone"/>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="addressstudent">Dirección</label>
                    <input placeholder="Ingrese la dirección" 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="addressstudent" type="text" v-model="student.address"/>
                </div>
                <button type="submit" href="/students" 
                class="rounded-r inline-block px-4 py-1.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out"
                >Guardar</button>
            
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            student:{
                first_name: '',
                last_name: '',
                age: '',
                cell_phone: '',
                address: '',
            }
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/students/' + this.$route.params.id);
        this.student = res.data;
    },
    methods:{
        async uptade(){
            if(confirm("Desea actualizar al estudiante")){
                const res = await axios.put('http://127.0.0.1:8000/api/students/' + this.$route.params.id, this.student)
                .then((res) =>{
                console.log(res.data);
                    alert('Los datos del estudiante se actualizaron correctamente');
                    window.location.assign('http://localhost:3000/students');
                }
                )
                .catch((error) => {
                console.log(error);
                }
                )
            }
            
        }
    }
}
</script>