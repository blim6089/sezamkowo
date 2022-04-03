import Post from "@/components/Post";
import PostImage5 from "@/assets/images/posts/5.png";
import PostImage2 from "@/assets/images/posts/2.png";
import PostImage6 from "@/assets/images/posts/6.png";
import PostImage4 from "@/assets/images/posts/4.png";

const RecentPosts = () => {
  const posts = [
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "16 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage5,
    },
    {
      title: "Opieka na wysokim poziomie",
      description:
        "Żłobek to świetne rozwiązanie dla rodziców, aby mieć trochę wolnego czasu lub możliwość spokojne...",
      date: "12 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage2,
    },
    {
      title: "Jesień",
      description:
        "Nasze czwartkowe popołudnie. \n Przyznać się, kto już robił szur szur szur bucikami lub szalał w liściach?...",
      date: "1 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage6,
    },
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "25 listopada 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage4,
    },
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "16 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage5,
    },
    {
      title: "Opieka na wysokim poziomie",
      description:
        "Żłobek to świetne rozwiązanie dla rodziców, aby mieć trochę wolnego czasu lub możliwość spokojne...",
      date: "12 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage2,
    },
    {
      title: "Jesień",
      description:
        "Nasze czwartkowe popołudnie. \n Przyznać się, kto już robił szur szur szur bucikami lub szalał w liściach?...",
      date: "1 grudnia 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage6,
    },
    {
      title: "Wolny wieczór dla Rodziców? Czemu nie!",
      description:
        "Halo halo! \n Czy wiecie, że czasami spotykamy się w żłobku także w weekend?...",
      date: "25 listopada 2021",
      categories: [
        { label: "kategoria 1", color: "#FFA25E" },
        { label: "kategoria 3", color: "#A87EFF" },
      ],
      image: PostImage4,
    },
  ];

  return (
    <div className="flex justify-center px-5 pt-8 pb-16">
      <div className="w-full max-w-[1590px]">
        <p className="text-lg text-[#646464] mb-9 relative">
          Wszystkie wpisy
          <span className="w-[200px] h-[1px] bg-[#646464] absolute -bottom-3.5 left-0"></span>
        </p>
        <div className="flex justify-center flex-wrap 2xl:-mx-7">
          {posts.map((post, index) => (
            <div className="px-0 md:px-5 lg:px-7 mb-8" key={index}>
              <Post {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
