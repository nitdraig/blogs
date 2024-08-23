"use client";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButtonSection = ({
  postUrl,
  title,
}: {
  postUrl: string;
  title: string;
}) => {
  const encodedPostUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(
    `Te invito a leer este interesante post: ${title}`
  );

  return (
    <div className="mt-4 flex justify-center space-x-4">
      {title && (
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedPostUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-[#336ae2]  hover:scale-125 " size={32} />
        </a>
      )}

      {title && (
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedPostUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-[#5285f5] hover:scale-125 " size={32} />
        </a>
      )}

      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle} ${encodedPostUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-[#069e5f] hover:scale-125 " size={32} />
      </a>

      {title && (
        <div
          className="fb-share-button"
          data-href={postUrl}
          data-layout="button_count"
        >
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedPostUrl}`}
            className="fb-xfbml-parse-ignore"
          >
            <FaFacebook size={32} className="text-[#284083] hover:scale-125 " />
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButtonSection;
