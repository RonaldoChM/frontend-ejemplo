<template>
    <div>
        <!-- ['full_name','profession','grade_academy','cell_phone'];-->
        <p>Profesor: {{full_name}} {{profession}}</p>
        <nuxt-link class="text-blue-600" :to="`/teachers/${id}/show`">Mostrar Profesor</nuxt-link>
        <nuxt-link class="text-green-600" :to="`/teachers/${id}/edit`">Editar profesor</nuxt-link>
                       
    </div>
</template>

<script>
export default{
    name: 'Teacher',
    props: ['id','full_name','profession','grade_academy','cell_phone'],
}
</script>
