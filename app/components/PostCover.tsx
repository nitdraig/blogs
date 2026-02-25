import { getCoverGradient } from "@/lib/coverPalette";

type Props = {
  postId: string;
  title: string;
  date: string;
};

export function PostCover({ postId, title, date }: Props) {
  const gradient = getCoverGradient(postId);

  return (
    <div
      className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative flex flex-col justify-end overflow-hidden rounded-lg"
      style={{ height: "24em", background: gradient }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg,transparent 0%,transparent 40%,rgba(0,0,0,.5) 70%,rgba(0,0,0,.85) 100%)",
        }}
      />
      <div className="relative z-20 p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight drop-shadow-lg">
          {title}
        </h1>
        <div className="flex items-center mt-3 gap-3">
          <img
            src="https://res.cloudinary.com/draig/image/upload/v1688837501/portolio-personal/axdmv6onpysqg8djney0.png"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
            alt=""
          />
          <div>
            <p className="font-semibold text-gray-100 text-sm">
              Avellaneda Agustin
            </p>
            <p className="text-gray-300 text-xs">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
