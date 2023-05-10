import Image from "next/image"

const Hero = () => {
  return (
    <>
        <div className="hidden lg:flex justify-between hero_container">
            <div className="hero_text">
                <h1 className="">Transform your health <br/>with Medicare</h1>
                <p>Your virtual health assistant backed by the knowledge of ChatGPT</p>
            </div>
        <Image
            src='/assets/hero_image.jpeg'
            width={550}
            height={300} 
            alt="A doctor using AI to treat patients"
            className="hero_img hero_img_clip aspect-[5/3]"
        />
        </div>
        <div className="hero_container flex_center flex-col h-72  relative lg:hidden">
            <div className="hero_text mt-7">
                <h1 className="">Transform your health <br/>with Medicare</h1>
                <p>Your virtual health assistant backed by the knowledge of ChatGPT</p>
            </div>
            <Image
                src='/assets/hero_image.jpeg'
                width={550}
                height={300} 
                alt="A doctor using AI to treat patients"
                className="hero_img absolute -z-[1] inset-0 object-cover right-0 w-full  h-72"
        />
        </div>
    </>
  )
}

export default Hero
