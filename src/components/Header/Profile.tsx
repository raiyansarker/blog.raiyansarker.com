// @ts-ignore
import { UilUserCircle, UilSignOutAlt } from '@iconscout/react-unicons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Profile = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-7 border-[1px] border-gray-800 aspect-square rounded-full overflow-hidden focus:ring-1 outline-none focus:ring-offset-2 focus:ring-slate-800">
        {/* eslint-disable-next-line */}
        <img
          src={`https://ui-avatars.com/api/?rounded=true&name=Raiyan+Sarker&background=ECF4FF&color=4338ca&bold=true&size=128`}
          alt="Avatar"
          title="Login"
          width={80}
          height={80}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          side="bottom"
          align="end"
          className="z-10 bg-gray-50 flex flex-col justify-start items-center space-y-0.5 p-1 rounded shadow-2xl shadow-gray-500 min-w-full"
        >
          <DropdownMenu.Item asChild={true}>
            <a
              href="/profile"
              className="pl-2 pr-8 py-1 flex flex-row justify-start items-center text-sm font-medium hover:rounded focus:rounded outline-none hover:bg-[#32275F] hover:text-white focus:bg-[#32275F] focus:text-white"
            >
              <UilUserCircle className="inline-block aspect-square w-4 mr-1" />
              Profile
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild={true}>
            <button className="pl-2 pr-8 py-1 text-sm font-medium hover:rounded focus:rounded outline-none hover:bg-[#32275F] hover:text-white focus:bg-[#32275F] focus:text-white">
              <UilSignOutAlt className="inline-block aspect-square w-4 mr-1" />
              Logout
            </button>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-gray-50" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Profile;
