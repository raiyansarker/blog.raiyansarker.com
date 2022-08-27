// @ts-ignore
import { UilUser } from '@iconscout/react-unicons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const Profile = ({ children }: PropsWithChildren) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={5}
        className="min-w-fit py-2.5 bg-[#F9FAFB] rounded-lg shadow-xl"
      >
        <div className="space-y-1">
          <DropdownMenu.Item className="hover:bg-red-500">
            <Link href="/">
              <a className="w-full hover:bg-[#FAFAFA] focus:bg-[#FAFAFA] py-1 flex flex-row justify-between items-center space-x-1 px-2">
                <UilUser className="inline aspect-square w-[0.85rem]" />
                <h4 className="tracking-wide text-sm">Profile</h4>
              </a>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/">
              <a className="w-full py-1 flex flex-row justify-between items-center space-x-1 rounded px-2">
                <UilUser className="inline aspect-square w-[0.85rem]" />
                <h4 className="tracking-wide text-sm">Logout</h4>
              </a>
            </Link>
          </DropdownMenu.Item>
        </div>

        <DropdownMenu.Arrow className="fill-[#F9FAFB]" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default Profile;
