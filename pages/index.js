import Formulario from "./components/Formulario";
import Mapa from "./components/Mapa";

export default function Home() {
  return (
    <>
      <body className="justify-content-center bg-dark">
        <div>
          {/* formulario para buscar servicios con api de google maps */}
          <Formulario />
          {/* mapa con la api de google maps */}
          <Mapa />
          {/* lista de servicios */}
          {/* <ListaServicios /> */}
        </div>
      </body>
    </>
  );
}
