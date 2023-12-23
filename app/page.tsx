import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <FontAwesomeIcon
        className="w-32 hover:opacity-100 opacity-50"
        icon={faArrowRight}
      />
    </div>
  );
}
