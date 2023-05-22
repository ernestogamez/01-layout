<template>
  <button class="button" type="button" @click="filter()">
    Buscar
  </button>
</template>

<script lang="ts" setup>

// Va a recibir una prop que es el nombre de la organización
const props = defineProps<{
  company: string;
}>();

const $emit = defineEmits(["filter"]);

// el $emit es quien nos permite comunicarnos entre componentes hijo-padre.
const filter = () => {
  $emit("filter", props.company);
};
</script>
