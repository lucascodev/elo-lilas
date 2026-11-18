import type { ReactNode } from "react";

type ContentWithAsideProps = {
  children: ReactNode;
  aside: ReactNode;
};

export function ContentWithAside({ children, aside }: ContentWithAsideProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-12">
      <div className="flex flex-col gap-8 lg:col-span-8 lg:gap-10">{children}</div>
      <aside className="flex flex-col gap-5 lg:col-span-4">{aside}</aside>
    </div>
  );
}
