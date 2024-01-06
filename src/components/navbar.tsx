import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="hidden flex-col md:flex border-b bg-black text-white">
            <div>
                <div className="flex h-16 items-center px-4">
                    {/* <TeamSwitcher />
                    <MainNav className="mx-6" /> */}
                    <h1 className="text-3xl font-semibold tracking-tight">Blog Website</h1>
                    <div className="mx-auto">
                        <ul className="flex justify-end space-x-14 ml-16 -mr-16">
                            <Link href={"/"}><li className="hover:underline hover:text-slate-400">Home</li></Link>
                            <p className="text-gray-500">|</p>
                            <Link href={"/blogs"}><li className="hover:underline hover:text-slate-400">Blog</li></Link>
                            <p className="text-gray-500">|</p>
                            <Link href={"#footer"}><li className="hover:underline hover:text-slate-400">About</li></Link>
                        </ul>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        {/* <Search />
                        <UserNav /> */}
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>MA</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}
