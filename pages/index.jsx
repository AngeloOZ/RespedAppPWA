import { LandingLayout } from "../components/layouts";
import {
  Contacto,
  Galeria,
  Header,
  Nosotros,
  Reservation,
} from "../components/Landing";

export default function Home() {
  return (
    <LandingLayout>
      <Header />
      <Reservation />
      <Galeria />
      <Nosotros />
      <Contacto />
    </LandingLayout>
  );
}
