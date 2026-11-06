import "@/app/global.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "„Meshtastic“ žemėlapis",
  description:
    "Dėkoju, kad naudojotės „Meshtastic“ žemėlapiu. Dabar daugiausia dėmesio skiriu „MeshCore“ tinklinio ryšio įrankių naudojimui ir priežiūrai.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
