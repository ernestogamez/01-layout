<template>
  <div class="container">
    <NuxtLink to="/" class="back">⬅️ Volver</NuxtLink>
    <article>
      <div>
        <img :src="member?.avatar_url" alt="" />
      </div>
      <div v-if="member">
        <h1>{{ member.name }}</h1>
        <p class="flex">
          {{ member.company }}
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { memberService } from "~~/services/members";
import { Member } from "~~/types";

// useRoute() es una composable que nos devuelve un objeto ruta con la información de la página actual
const route = useRoute();

// Podemos acceder a sus parámetros de esta forma
const login = route.params.login as string; // as string para indicar que solo viene un string (podrían venir varios)

// useAsyncData es un composable de nuxt (no de vue) que hace una llamada asíncrona en una página
// La diferencia con usar $fetch o fetch es que lo ejecuta aquí dentro se ejecuta desde el lado del servidor (renderizará la plantilla completa desde el lado del servidor)
const { data: member } = useAsyncData<Member>(() =>
  memberService.getMemberByLogin(login)
);
</script>
