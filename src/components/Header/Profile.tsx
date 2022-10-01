// @ts-ignore
import { UilUserCircle, UilSignOutAlt } from '@iconscout/react-unicons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const Profile = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-7 border-[1px] border-gray-800 aspect-square rounded-full overflow-hidden focus:ring-1 outline-none focus:ring-offset-2 focus:ring-slate-800">
        <div className="inline-flex overflow-hidden relative justify-center items-center w-full aspect-square bg-[#ECF4FF] rounded-full">
          <span title="Login" className="font-medium text-sm text-[#4338ca]">
            RS
          </span>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          side="bottom"
          align="end"
          className="border-[1px] border-gray-300 z-10 bg-gray-50 flex flex-col justify-start items-center p-1 rounded shadow-2xl shadow-gray-500 min-w-full"
        >
          <Link href="/profile" passHref={true}>
            <DropdownMenu.Item asChild={true}>
              <a className="w-full pl-2 pr-8 py-1 flex flex-row justify-start items-center text-sm font-medium hover:rounded focus:rounded outline-none hover:bg-[#32275F] hover:text-white focus:bg-[#32275F] focus:text-white">
                <UilUserCircle className="inline-block aspect-square w-4 mr-1" />
                Profile
              </a>
            </DropdownMenu.Item>
          </Link>
          <Link href="/logout" passHref={true}>
            <DropdownMenu.Item asChild={true}>
              <a className="w-full pl-2 pr-8 py-1 flex flex-row justify-start items-center text-sm font-medium hover:rounded focus:rounded outline-none hover:bg-[#32275F] hover:text-white focus:bg-[#32275F] focus:text-white">
                <UilSignOutAlt className="inline-block aspect-square w-4 mr-1" />
                Logout
              </a>
            </DropdownMenu.Item>
          </Link>

          <DropdownMenu.Arrow className="fill-gray-300" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Profile;
