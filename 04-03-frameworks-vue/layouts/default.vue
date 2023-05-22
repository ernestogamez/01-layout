<!-- Al llamarlo "default", estamos indicando que es el layout por defecto. Si no especificamos un layout, se usará este en todas las páginas. -->
<template>
    <div id="app">
      <!-- Añadimos la cabecera para todas las páginas -->
      <Header />
      <main>
        <!-- En este slot es donde se va a inyectar el contenido -->
          <slot />
      </main>
    </div>
  </template>
  