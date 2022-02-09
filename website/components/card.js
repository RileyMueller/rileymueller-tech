import Image from 'next/image'

export default function Card({imagesrc, title, link}) {
    return (
        <a href={link}
            className='box-content shadow-2xl duration-150 rounded-lg bg-gray-300 aspect-[5/7] w-[18rem] text-gray-900 border-gray-300
                flex flex-col
                focus:duration-200:translate-y-2
                border-[16px] hover:border-[8px]
                m-2 hover:m-4'>
            <div className="basis-[71.42857%]  flex items-center justify-items-center">
                <div className="  w-full m-1">
                    <Image 
                        alt='Cover of the book Rationality: From AI to Zombies'
                        src={imagesrc}
                        layout='responsive'
                        width='100vw'
                        height='100vh'
                        objectFit='contain'
                        quality={100}/>
                </div>
            </div>
            <div className="basis-[28.57143%]  flex items-center justify-items-center">
                <div className="font-bold  w-full">
                    <div className="text-center text-xl">
                        {title}
                    </div>
                </div>
            </div>
        </a>
    )
}