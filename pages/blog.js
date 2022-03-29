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
      <div className="flex justify-center pt-14 pb-10">
        <div className="w-full max-w-[950px]">
          <div className="w-full h-[68px] relative border border-[#B3B3B3] rounded-full overflow-hidden mb-3">
            <input
              type="text"
              className="w-full h-full outline px-8 font-light text-lg text-[#463F3A]"
              placeholder="Wyszukaj artykułów"
            />
            <button className="flex absolute right-4 top-1/2 -translate-y-1/2">
              <Image src={Search} />
            </button>
          </div>
          <div className="flex justify-center">
            {tags.map((tag, index) => (
              <button
                className="w-[148px] h-10 mx-2 rounded-full flex items-center justify-center border font-medium text-lg"
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
