import React from "react";

interface IProp{
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<IProp> = ({children, title}) => {
  return (
    <section>
      <div>
        <h2>{ title}</h2>
        {children}
      </div>
    </section>
  )
}