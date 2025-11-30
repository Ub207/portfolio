import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="mt-12 text-gray-800 dark:text-gray-400">
      <h1 className="text-2xl md:text-4xl font-bold dark:text-gray-300">
        Ubaidurrahman
      </h1>
      <p className="flex">
        Full Stack Developer
      </p>
      <ul className="list-disc list-inside my-3 text-lg">
        <li>
          Reach me:{" "}
          <Link href="mailto:usmanubaidurrehman@gmail.com" className="underline hover:text-gray-300">
            usmanubaidurrehman@gmail.com
          </Link>
        </li>
        <li>
          Say hi on Twitter:{" "}
          <Link
            href="https://x.com/ubaidullahsahab"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            https://x.com/ubaidullahsahab
          </Link>
        </li>
        <li>
          See my projects:{" "}
          <Link
            href="https://github.com/Ub207"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            https://github.com/Ub207
          </Link>
        </li>
        <li>
          Connect with me:{" "}
          <Link
            href="https://www.linkedin.com/in/ubaidurrehman-usman-2bbb59245/"
            target="_blank"
            className="underline hover:text-gray-300"
          >
            linkedin.com/in/ubaidurrehman-usman-2bbb59245
          </Link>
        </li>
        <li>
          Check out my posts:{" "}
          <Link href="/posts" className="underline hover:text-gray-300">
            /posts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
