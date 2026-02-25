import type { Messages } from "@/lib/messages";

export function Footer({ messages }: { messages: Messages }) {
  return (
    <footer className="bg-[#212529] w-screen">
      <div className="text-white pt-8">
        <div className="text-center">
          <p className="italic mx-4">{messages.footer.quote}</p>
          <div className="pt-3 pb-3 items-center text-sm hover:scale-110 text-gray-400">
            <a
              className="order-2 md:order-1 mt-8 md:mt-0"
              href="https://www.linkedin.com/in/avellaneda-agustín-tns/"
              target="blank"
              rel="noopener noreferrer"
            >
              {messages.footer.developed}{" "}
              <span className="text-red-800 text-lg">♥</span>{" "}
              {messages.footer.by} &copy; {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
