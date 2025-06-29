import React, { type FC } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}
const SectionContainer: FC<Props> = ({ id, children, ref }) => {
  return (
    <section
      id={id}
      className="from-muted/20 to-background bg-gradient-to-b py-12"
      ref={ref}
    >
      <div className="container mx-auto max-w-lg px-5 md:max-w-2xl md:px-4 lg:max-w-4xl xl:max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
