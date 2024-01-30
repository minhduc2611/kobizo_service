import { extend } from "@react-three/fiber";
import ShowCaseGallerySpaceOne from "./ShowCaseGallerySpaceOne";
import ShowCaseGallerySpaceThree from "./ShowCaseGallerySpaceThree";
import ShowCaseGallerySpaceTwo from "./ShowCaseGallerySpaceTwo";
import { UnrealBloomPass } from "three-stdlib";
extend({ UnrealBloomPass });
const ShowCaseGallery = () => {
  return (
    <div className="Frame1587 h-[100vh] relative py-28 px-28 grid grid-rows-4 grid-cols-1 lg:grid-cols-3 grid-flow-row gap-10">
      <div className="DivCardInner lg:row-span-4 lg:col-span-1 w-full h-full rounded-2xl bg-black">
        <ShowCaseGallerySpaceOne />
      </div>

      <div className="DivCardInner lg:row-span-2 lg:col-span-2 w-full h-full rounded-2xl bg-black">
        <ShowCaseGallerySpaceTwo />
      </div>

      <div className="DivCardInner lg:row-span-2 lg:col-span-2 bg-black w-full h-full rounded-2xl ">
        <ShowCaseGallerySpaceThree />
      </div>
    </div>
  );
};

export default ShowCaseGallery;
