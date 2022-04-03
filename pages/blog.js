import Image from "next/image";
import Search from "@/assets/images/icons/magnify.svg";
import AllPosts from "components/features/blog/AllPosts";
import RecentPosts from "components/features/blog/RecentPosts";

export default function Blog() {
  const tags = [
    {
      label: "Kategoria 1",
      color: "#FFA25E",
    },
    {
      label: "Kategoria 2",
      color: "#88BFFF",
    },
    {
      label: "Kategoria 3",
      color: "#A87EFF",
    },
    {
      label: "Kategoria 4",
      color: "#FF88A5",
    },
  ];

  return (
    <div>
      <div className="flex justify-center pt-14 pb-8 lg:pb-10">
        <div className="w-full max-w-[950px] px-5">
          <div className="w-full h-[54px] lg:h-[68px] relative border border-[#B3B3B3] rounded-full overflow-hidden mb-4 lg:mb-3">
            <input
              type="text"
              className="w-full h-full outline px-7 lg:px-8 font-light text-xl lg:text-lg text-[#463F3A]"
              placeholder="Wyszukaj artykułów"
            />
            <button className="flex absolute right-4 top-1/2 -translate-y-1/2">
              <Image src={Search} />
            </button>
          </div>
          <div className="flex flex-wrap justify-start lg:justify-center">
            {tags.map((tag, index) => (
              <button
                className="w-auto lg:w-[148px] h-8 lg:h-10 mr-3 px-3 lg:px-0 lg:mx-2 rounded-full flex items-center justify-center border font-medium text-base lg:text-lg mb-2.5 lg:mb-0"
                style={{ color: tag.color, borderColor: tag.color }}
                key={index}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <RecentPosts />
      <AllPosts />
    </div>
  );
}
