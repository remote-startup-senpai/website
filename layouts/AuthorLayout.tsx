import { ReactNode } from "react";
import type { Authors } from "contentlayer/generated";
import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const {
    name,
    avatar,
    occupation,
    email,
    twitter,
    instagram,
    linkedin,
    github,
    website,
  } = content;

  return (
    <>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 py-8">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
          )}
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="website" href={website} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="instagram" href={instagram} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  );
}
