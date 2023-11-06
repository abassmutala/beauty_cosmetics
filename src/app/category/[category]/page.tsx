import { Category, CategoryWithSubsections } from "@/types";
import Link from "next/link";

async function getData(params: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/${params}`, {
      method: "GET",
      // cache: "no-store",
      // next: {
      //   revalidate: 9000,
      // },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Could not fetch data!");
  }
}

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const data: CategoryWithSubsections = await getData(params.category);

  return (
    <main className="font-body">
      <section className="relative py-8 md:py-12 bg-white">
        <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
          <div className="w-full text-left">
            <h5 className="font-heading text-left text-2xl md:text-3xl">
              {data.name}
            </h5>
          </div>
          <div className="w-full max-w-6xl mx-auto pt-4 md:pt-16">
            <div className="flex justify-center flex-wrap gap-8 overflow-hidden">
              {data.subsections?.map((section: Category) => {
                return (
                  <Link
                    // href={section.href!}
                    href={`/category/face/${section.href}`}
                    className="hover:shadow-md w-full max-w-[360px]"
                    key={section.name}
                  >
                    <div className="w-full h-64 border border-subtitle">
                      <div className="h-full flex items-center justify-center">
                        <h6 className="text-lg font-semibold uppercase">
                          {section.name}
                        </h6>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
