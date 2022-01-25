export default function Card({content, title, link}) {
    return (
        <a href={link}
            className='box-content shadow-2xl p-3 hover:p-1 duration-150 rounded-lg  bg-gray-50 aspect-[5/7] max-w-[18rem] text-gray-900 border-x-gray-500
                flex flex-col
                 focus:duration-200:translate-y-2'>
            <div className="basis-[71.42857%] bg-amber-200 flex items-center justify-items-center">
                <div className=" bg-yellow-100 w-full">
                    <div className="text-center">
                        {content}
                    </div>
                </div>
            </div>
            <div className="basis-[28.57143%] bg-orange-700 flex items-center justify-items-center">
                <div className="font-bold bg-yellow-100 w-full">
                    <div className="text-center text-xl">
                        {title}
                    </div>
                </div>
            </div>
        </a>
    )
}