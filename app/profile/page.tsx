import ProfileCardContainer from "@/components/profile/ProfileCardContainer";

export default async function Profile() {
    return (
        <div className="relative bg-white w-full overflow-hidden flex flex-col items-center">
            <header className="self-stretch h-96 py-12 px-6 sm:px-24 lg:px-40 bg-[url('/hero2@3x.png')] bg-cover bg-no-repeat bg-top text-white font-inter">
                <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8">
                    <b className="text-3xl sm:text-4xl lg:text-5xl">Profile</b>
                    <b className="text-xl sm:text-2xl lg:text-3xl">Change your public profile</b>
                </div>
            </header>
            <ProfileCardContainer />
        </div>
    )
}
