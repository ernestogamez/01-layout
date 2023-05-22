<template>
  <section class="wrapper">
    <!-- Creamos un filtro por organización -->
    <div class="flex align-items-center justify-content-between container">
      <hr />
      <input type="text" v-model="filterStore.company" />
      <Filter :company="filterStore.company" @filter="onFilter" />
      <hr />
    </div>

    <!-- Para mostrar el error si el fetch no devuelve datos -->
    <h1 class="text-align-center margin-top" v-if="filterStore.error">:(</h1>
    <h1 class="text-align-center margin-top" v-if="filterStore.error"> {{ filterStore.error }}</h1>
    
    <!-- Para mostrar los datos que devuelve el fetch -->
    <ul class="product-list" v-if="!filterStore.error">
      <!-- Pintamos la lista con un v-for -->
      <li v-for="member in filterStore.list" :key="member.id">
        <!-- Encerramos cada article dentro de un NuxtLink para que al cliclar en una card nos lleve a la vista de detalle del miembro -->
        <!-- Esto se traduce en html en un link normal con href -->
        <NuxtLink :to="`/members/${member.login}`">
          <article class="grid product-container card">
            <div class="image">
              <img :src="member.avatar_url" alt="" loading="lazy" />
            </div>
            <div class="product-container__content">
              <h2>
                {{ member.login }}
              </h2>
              <p>
                <span class="grey-text">URL: </span>
                <strong>{{ member.url }}</strong>
              </p>
            </div>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">

// FILTERING
// Para el filtro por nombre de organización

// Recuperamos el store (esto se hace sin importar porque está declarado en la carpeta /composables)
const filterStore = useFilterStore();

// Implementación del callback onFilter
const onFilter = (company: string) => {
  // Cada vez que se ejecute vamos a hacer un console log
  console.log("onFilter", company);

  // Cuando se ejecute vamos a volver a consultar la api con la nueva organización
  filterStore.filterCompany(company);
};

// SERVICE
// Hacemos la llamada a nuestra composable
// No hay que hacer import por el propio framework (al estar en la carpeta composables)
// Esto es para la primera vez que se carga la página
const { list } = await useMembersApi(filterStore.company);
filterStore.list = list;
</script>
