import AboutHero from "@/Components/about/AboutHero";
import AboutValues from "@/Components/about/AboutValues";
import AboutTeam from "@/Components/about/AboutTeam";

export default function About() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 text-text-black">
      <AboutHero />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}
