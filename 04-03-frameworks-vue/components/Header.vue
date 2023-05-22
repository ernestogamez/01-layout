<template>
  <nav class="nav flex align-items-center justify-content-between container">
    <div>
      <h1>Members App</h1>
    </div>
    <!-- Añadimos lo siguiente para mostrar el total de miembros arriba -->
    <ClientOnly><div>total miembros: {{ filterStore.totalMembers }}</div></ClientOnly>
  </nav>
</template>

<script setup lang="ts">
const filterStore = useFilterStore();
</script>
