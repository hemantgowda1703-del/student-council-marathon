import Header from "@/components/marathon/Header";
import Hero from "@/components/marathon/Hero";
import About from "@/components/marathon/About";
import RaceCategories from "@/components/marathon/RaceCategories";
import RouteMap from "@/components/marathon/RouteMap";
import EventDetails from "@/components/marathon/EventDetails";
import Gallery from "@/components/marathon/Gallery";
import Registration from "@/components/marathon/Registration";
import Sponsors from "@/components/marathon/Sponsors";
import Footer from "@/components/marathon/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <RaceCategories />
      <RouteMap />
      <EventDetails />
      <Gallery />
      <Registration />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Index;
