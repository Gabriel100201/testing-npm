import React, { useEffect, useState } from "react";
import { tw } from "twind";

export const Header = ({ color }) => {
  const [colorBg, setColorBg] = useState(null);

  useEffect(() => {
    setColorBg(color);
  }, [color]);

  return (
    <section className={tw`w-full ${colorBg ? colorBg : "bg-red-500"} h-32`}>
      <span>Header de prueba</span>
    </section>
  );
};
