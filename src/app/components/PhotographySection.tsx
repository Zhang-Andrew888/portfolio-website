import fs from "node:fs";
import path from "node:path";
import PhotographyGallery from "./PhotographyGallery";

function photographyFilenames(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "photography");
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
}

function altFromFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

const PhotographySection = () => {
  const files = photographyFilenames();
  const items = files.map((file) => ({
    src: `/images/photography/${file}`,
    alt: altFromFilename(file),
  }));

  return (
    <section id="photography" className="py-12 sm:py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">Photography</h2>
      <PhotographyGallery items={items} />
    </section>
  );
};

export default PhotographySection;
