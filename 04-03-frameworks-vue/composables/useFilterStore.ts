import { defineStore } from "pinia";
import { Member } from "~/types";

// Definimos el store donde almacenaremos las variables que queremos usar en toda la aplicación
// El primer parámetro es el nombre del store y el segundo la configuración del store
export const useFilterStore = defineStore("filter", {
  state: () => ({
    list: [] as Member[],
    company: "lemoncode" as string,
    error: "" as string,
  }),
  getters: {
    totalMembers: (state) => {
      return state.list.length;
    },
  },
  actions: {
    // Volvemos a llamar a la api para que nos devuelva la lista de miembros de la compañía que le pasamos como parámetro
    async filterCompany(company: string) {
      try {
        this.list = await $fetch<Member[]>(
          `https://api.github.com/orgs/${company}/members`
        );
        // Reiniciamos a vacío la variable error si el fetch ha ido bien
        this.error = "";
      } catch (err) {
        // Seteamos la lista a vacío para mostrar 0 en el total de miembros
        this.list = [];
        // Seteamos el error para mostrarlo en pantalla
        this.error =
          "La organización introducida no ha devuelto datos. Prueba otra vez!";
      }
    },
  },
});
