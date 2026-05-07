import resumeData from "@/data/resume.json";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero name={resumeData.name} email={resumeData.contact.email} />
      <Projects />
      <Footer />
    </>
  );
}
