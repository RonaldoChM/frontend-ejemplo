<template>
    <div>
        <!-- <p>Estudiante: {{first_name}} {{last_name}}</p> -->
        <nuxt-link class="rounded-l inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/students/${id}/show`">Ver</nuxt-link>
        <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/students/${id}/edit`">Editar</nuxt-link>
       <!--to="`/students/${id}/show`"-->
    </div>
</template>

<script>
export default{
    name: 'Student',
    props: ['id', 'first_name', 'last_name', 'age', 'cell_phone', 'address'],
}
</script>
