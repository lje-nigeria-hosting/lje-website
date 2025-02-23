import Image from "next/image";
import Link from "next/link";

interface AnnouncementCardProps {
  permalink: string;
  category: string;
  author: string;
  title: string;
  displayImage: string;
  membersOnly: string;
  date: Date;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  permalink,
  category,
  author,
  title,
  displayImage,
  date,
  membersOnly,
}) => {
  // Card component for every announcement
  return (
    <div className="md:mx-12">
      <div className="py-6 overflow-hidden max-w-lg md:max-w-[60%] flex space-x-3">
        <div className="w-1/3 pt-2 relative">
          <Image
            src={displayImage}
            alt="news-image"
            width={700}
            height={400}
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="w-2/3 px-3">
          <h1 className="text-lg mb-2 font-medium tracking-widest">
            {category}
          </h1>
          <Link href={`/dashboard/post?permalink=${permalink}`}>
            <p className="text-black tracking-wide mb-2 text-[15px] hover:underline">
              {title.substring(0, 140)}...
            </p>
          </Link>
          <div>
            <p className="text-gray-600 font-medium tracking-widest pt-3 text-[14px]">
              {author}
            </p>
            <p className="text-gray-400 text-[13px]">
              {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
            </p>
            {membersOnly === "YES" && (
              <p className="text-red-500 text-[13px]">Members Only</p>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AnnouncementCard;
