import Image from "next/image";



const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={600}
        height={600}
        alt="avatar"
        className="-translate-z-5 w-full h-full"
      />
    </div>
  )
};

export default Avatar;
