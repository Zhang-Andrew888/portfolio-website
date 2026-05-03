import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  codeHref?: string;
};

const ProjectCard = ({ imgUrl, title, description }: Props) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#181818] shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-5">
        <h3 className="text-lg font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#ADB7BE]">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
