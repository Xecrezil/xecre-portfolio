import Nebula from "./Nebula";
import StarField from "./StarField";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">

      <Nebula />

      <StarField />

    </div>
  );
}