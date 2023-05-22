// En este archivo vamos a extraer toda la lógica que previamente estaba en el script de ProductList.vue
import { memberService } from "~/services/members";

export default async function useMembersApi(company: string) {
  // Esto es por usar el $fetch (no hay que tipar)
  const list = await memberService.get(company);

  return { list };
}
