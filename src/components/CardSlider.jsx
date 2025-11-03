import React from "react";
import { useRef } from "react";
import { ChevronRight, ChevronLeft, Heart } from "lucide-react";


const CardSlider = ({heading , cards }) => {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

   
    return (
        <div className="w-full max-w-9xl mx-auto mt-10  px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{heading}</h2>
                <div className="flex gap-2">
                    <button onClick={scrollLeft} className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"><ChevronLeft  className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                    <button onClick={scrollRight} className="p-2 sm:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"><ChevronRight className="w-4 h-4 sm:w-5 sm:h-5"/></button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {cards.map((card) => (
                    <div key={card.id} className="flex-shrink-0 w-44 sm:w-54 md:w-60 lg:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="relative">
                            <img src={card.image} alt={card.title} className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-xl" />

                            <div className="absolute top-2 left-2 bg-white text-[10px] sm:text-xs font-semibold text-gray-800 px-2 py-1 rounded-full shadow-sm">
                                Guest favourite
                            </div>
                            <div className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white rounded-full shadow-sm hover:scale-110 transition">
                                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                            </div>

                        </div>

                        <div className="p-2 sm:p-3">
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold">{card.title}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1">{card.info}.</p>
                        </div>
                    </div>
                )

                )

                }
            </div>
            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>


        </div>
    )
}
export default CardSlider;