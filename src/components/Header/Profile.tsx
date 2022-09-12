import Image from 'next/future/image';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
const Profile = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-6 ring-1 aspect-square rounded-full overflow-hidden">
        <Image
          src="https://media.raiyansarker.com/avatar/default.png"
          alt="Avatar"
          width={80}
          height={80}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-gray-50 rounded drop-shadow-xl py-2 min-w-full"
        >
          <DropdownMenu.Item className="outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white px-3 py-0.5">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white px-3 py-0.5">
            <Link href="/logout">
              <a>Logout</a>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-gray-50" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Profile;
