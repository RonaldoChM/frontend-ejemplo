<template>
    <div>
        <!-- ['full_name','profession','grade_academy','cell_phone'];-->
        <!-- <p>Profesor: {{full_name}} {{profession}}</p> -->
        <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/teachers/${id}/show`">Ver</nuxt-link>
        <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/teachers/${id}/edit`">Editar</nuxt-link>
                       
    </div>
</template>

<script>
export default{
    name: 'Teacher',
    props: ['id','full_name','profession','grade_academy','cell_phone'],
}
</script>
