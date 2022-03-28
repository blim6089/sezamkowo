import Image from "next/image";

const Gallery = (props) => {
  return (
    <div className="flex">
      <div className="w-1/6 px-2.5 py-2">
        <div className="flex rounded-md overflow-hidden cursor-pointer">
          <Image src={props.photos[0]} />
        </div>
      </div>
      <div className="w-1/6">
        <div className="px-2.5 py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer">
            <Image src={props.photos[1]} />
          </div>
        </div>
        <div className="px-2.5 py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer">
            <Image src={props.photos[2]} />
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="px-2.5 py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer">
            <Image src={props.photos[3]} />
          </div>
        </div>
        <div className="flex">
          <div className="px-2.5 py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer">
              <Image src={props.photos[4]} />
            </div>
          </div>
          <div className="px-2.5 py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer">
              <Image src={props.photos[5]} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/6 px-2.5 py-2">
        <div className="flex rounded-md overflow-hidden cursor-pointer">
          <Image src={props.photos[6]} />
        </div>
      </div>
      <div className="w-1/6">
        <div className="mx-2.5 py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer">
            <Image src={props.photos[7]} />
          </div>
        </div>
        <div className="mx-2.5 py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer">
            <Image src={props.photos[8]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
