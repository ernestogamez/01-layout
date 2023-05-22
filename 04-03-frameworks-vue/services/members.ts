import { Member } from "~/types";

export const memberService = {
  async get(company: string) {
    console.log("company is:" + company);
    
    // Utilizamos $fetch, que es una función que nos proporciona Nuxt.
    // Para utilizar la misma api en navegador y en servidor
    try {
      const members = await $fetch<Member[]>(
        `https://api.github.com/orgs/${company}/members`
      );
      return members;
    
    } catch (err) {
      console.log(err);
      return []
    }
  },

  // Para recuperar un miembro por su login -> Se usa en la página de detalle [login].vue
  async getMemberByLogin(login: string) {
    const member = await $fetch<Member>(
      `https://api.github.com/users/${login}`
    );
    return member;
  },
};
