const Gallery = (props) => {
  return (
    <div className={`flex ${!props.horizontal ? `flex-wrap` : ``}`}>
      <div className="w-full xl:w-1/3 flex">
        <div className="w-1/2 p-2 xl:px-2.5 xl:py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
            <img src={props.photos[0].src} className="w-full" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-2 xl:px-2.5 xl:py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[1].src} className="w-full" />
            </div>
          </div>
          <div className="p-2 xl:px-2.5 xl:py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[2].src} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3">
        <div className="p-2 xl:px-2.5 xl:py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
            <img src={props.photos[3].src} className="w-full" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-2 xl:px-2.5 xl:py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[4].src} className="w-full" />
            </div>
          </div>
          <div className="w-1/2 p-2 xl:px-2.5 xl:py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[5].src} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex">
        <div className="w-1/2 p-2 xl:px-2.5 xl:py-2">
          <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
            <img src={props.photos[6].src} className="w-full" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mx-2.5 py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[7].src} className="w-full" />
            </div>
          </div>
          <div className="mx-2.5 py-2">
            <div className="flex rounded-md overflow-hidden cursor-pointer shadow-none hover:shadow-locationCard">
              <img src={props.photos[8].src} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
