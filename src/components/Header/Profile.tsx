import Image from '../Image';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
const Profile = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-7 border-[1px] border-gray-800 aspect-square rounded-full overflow-hidden focus:ring-1 outline-none focus:ring-offset-2 focus:ring-slate-800">
        <Image
          src="https://avatar.raiyansarker.com/u/1.png"
          alt="Avatar"
          width={80}
          height={80}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          side="bottom"
          align="end"
          className="border-[1px] z-10 border-gray-500 bg-gray-50 py-1 rounded shadow min-w-full"
        >
          <DropdownMenu.Item className="outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white px-3 py-0.5">
            <Link href="/profile">
              <a className="text-sm">Profile</a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white px-3 py-0.5">
            <Link href="/logout">
              <a className="text-sm">Logout</a>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-gray-500" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Profile;
