import Image from "next/image";



const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatarMyService.png'}
        width={600}
        height={600}
        alt="avatar"
        className="-translate-z-5 w-full h-full opacity-20 "
      />
    </div>
  )
};

export default Avatar;
