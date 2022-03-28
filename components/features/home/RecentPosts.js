import Post from "@/components/Post";

const RecentPosts = (props) => {
  return (
    <div className="py-[54px] px-[140px]">
      <p className="font-bold text-4xl text-[#463F3A] mb-9 text-center">
        Najnowsze posty
      </p>
      <div className="flex">
        {props.posts.map((post, index) => (
          <div className="w-1/4 px-7" key={index}>
            <Post {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
