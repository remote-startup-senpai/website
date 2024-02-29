import characterData from "@/data/characterData";
import CharacterCard from "@/components/CharacterCard";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "Media" });

export default function Media() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Synopsis
          </h1>
        </div>
        <div className="container py-12">
          Remote Startup Senpai (RSS) is an anime series about the life and
          times of engineers at a small tech startup team acquired by a large
          company in Tokyo.
          <br />
          <br />
          As for what they're building, all we can say for now is "boring
          corporate apps".
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Characters
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {characterData.map((d) => (
              <CharacterCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                position={d.position}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
