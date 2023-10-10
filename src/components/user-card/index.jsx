import { useState } from "react";
import Button from "../button";

export default function UserCard({ user }) {

    const [following, setFollowing] = useState(false)

    return (
        <button className="py-3 px-4 flex items-center gap-3 transition-colors hover:bg-white/[0.03]">
            <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
            <div className="flex flex-1 flex-col text-left">
                <div className="text-[15px] leading-7 font-bold">
                    {user.fullName}
                </div>
                <div className="text-[15px] text-[color:var(--color-base-secondary)] ">@{user.username}</div>
            </div>
            <div>
                {following ? (
                    <Button variant="white-outline" size="small" onClick={() => setFollowing(false)} className="whitespace-nowrap group">
                        <div className="flex group-hover:hidden">Takip ediliyor</div>
                        <div className="hidden group-hover:flex">Takibi bırak</div>
                    </Button>
                ) : (
                    <Button variant="white" size="small" onClick={() => setFollowing(true)}>Takip et</Button>
                )}
            </div>
        </button>
    )
}