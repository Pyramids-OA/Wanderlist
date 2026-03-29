import LocationCard from "./LocationCard";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-400 h-auto pb-50">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 ml-8 mt-8">
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
}
