import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "About" });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "default") as Authors;
  const authorContent = coreContent(author);

  const illustrator = allAuthors.find(
    (p) => p.slug === "takeyukimi"
  ) as Authors;
  const illustratorContent = coreContent(illustrator);

  const studio = allAuthors.find((p) => p.slug === "studio") as Authors;
  const studioContent = coreContent(studio);

  const assistingStudio = allAuthors.find(
    (p) => p.slug === "assisting_studio"
  ) as Authors;
  const assistingStudioContent = coreContent(assistingStudio);

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <AuthorLayout content={authorContent}>
          <MDXLayoutRenderer code={author.body.code} />
        </AuthorLayout>
        <AuthorLayout content={illustratorContent}>
          <MDXLayoutRenderer code={illustrator.body.code} />
        </AuthorLayout>
        <AuthorLayout content={assistingStudioContent}>
          <MDXLayoutRenderer code={assistingStudio.body.code} />
        </AuthorLayout>
      </div>
    </>
  );
}
