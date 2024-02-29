import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";
import HeaderImage from "@/data/header.jpg";
import Image from "next/image";
import NewsletterForm from "pliny/ui/NewsletterForm";
import { Instagram, Youtube } from "@/components/social-icons/icons";

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex flex-col items-center justify-center">
          <Image src={HeaderImage} alt="header" />
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="flex flex-col flex-wrap justify-center items-center">
            <a
              target="_blank"
              href="https://instagram.com/remotestartupsenpai"
              className="mb-2 flex justify-center items-center rounded px-2 py-1 mx-5 my-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#c13584" }}
            >
              <Instagram className="fill-current px-2 text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-14 w-14" />
              <span className="text-xl px-2 whitespace-nowrap">
                Watch Shorts on Instagram
              </span>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/remotestartupsenpai"
              className="mb-2 flex justify-center items-center rounded px-1 mx-2.5 my-1 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#cb4e44" }}
            >
              <Youtube className="fill-current px-1 text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-10 w-10" />
              <span className="text-l px-1 whitespace-nowrap">
                Watch Shorts on YouTube
              </span>
            </a>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 py-5">
          News
        </h1>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/news/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/news/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/news"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
