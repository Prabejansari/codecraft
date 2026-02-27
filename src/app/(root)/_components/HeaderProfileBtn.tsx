"use client";
// import LoginButton from "@/components/LoginButton";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import useMounted from "@/app/hooks/useMounted";
import Navigate from "@/components/Navigate";

function HeaderProfileBtn() {
    const mounted = useMounted();

    if (!mounted) {
        return (
            <div className="w-10 h-10 bg-gray-800 rounded-full animate-pulse" />
        );
    }

    return (
        <>
            <UserButton>
    <UserButton.MenuItems>
        <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
        >
            <Navigate href="/profile" />
        </UserButton.Link>
    </UserButton.MenuItems>
</UserButton>
            <SignedOut>
                {/* <LoginButton /> */}
                <SignInButton />
            </SignedOut>
        </>
    );
}
export default HeaderProfileBtn;