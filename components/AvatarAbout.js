import Image from "next/image";



const AvatarAbout = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/aboutAvatar.png'}
        width={600}
        height={600}
        alt="avatar"
        className="-translate-z-5 w-full h-full opacity-15 "
      />
    </div>
  )
};

export default AvatarAbout;
