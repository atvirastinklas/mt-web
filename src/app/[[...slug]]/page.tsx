import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main>
      <p>
        Dėkoju, kad naudojotės „Meshtastic“ žemėlapiu. Žemėlapis buvo mažai
        naudojamas, o dabar daugiausia dėmesio skiriu „MeshCore“ tinklinio ryšio
        įrankių naudojimui ir priežiūrai.
      </p>
      <div className="notice-actions">
        <Button asChild variant="outline" className="notice-link">
          <a href="https://atvirastinklas.lt">Grįžti į titulinį</a>
        </Button>
        <Button asChild variant="outline" className="notice-link">
          <a href="https://meshcore.atvirastinklas.lt">MeshCore įrankis</a>
        </Button>
      </div>
    </main>
  );
}
