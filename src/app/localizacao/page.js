import { getPostos } from "@/util/api";

import Map from "../components/Map/Map";
import Menu from "../components/Menu/menu";

export default async function Localizacao() {
  const postos = await getPostos();
  return (
    <div>
      <Menu />
      <Map postos={postos} />
    </div>
  );
}
