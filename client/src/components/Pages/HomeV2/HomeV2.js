import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const events = [
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  }
  // Add more event objects here
];

export default function EventCarousel() {
    return (
        <div>
            <div className="relative w-full overflow-visible">
                <Swiper
                slidesPerView="2"
                centeredSlides={true}
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                >
                {events.map((event, index) => (
                    <SwiperSlide
                    key={index}
                    style={{
                        width: '66.66%', // 2/3 of the container width
                    }}
                    className="transition-transform"
                    >
                    <div className="bg-zinc-100 rounded-2xl overflow-hidden shadow-lg">
                        <img
                        src={event.image}
                        className="w-full h-60 object-cover rounded-t-2xl"
                        alt={event.title}
                        />
                        <div className="p-4 flex items-start gap-3">
                        <img
                            src={event.logo}
                            className="w-12 h-12 rounded-full"
                            alt="Logo"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="text-sm">{event.description}</p>
                        </div>
                        <div className="text-sm font-semibold whitespace-nowrap">
                            {event.date}
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div class="flex justify-between bg-violet-900">
                <button type="button" class="flex items-center text-black bg-zinc-300 hover:bg-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-200 font-medium rounded-full text-med px-5 py-2.5 text-center m-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    <span class="ml-8 mr-8">My RSOs</span>
                </button>
                
                <button type="button" class="flex items-center text-black bg-zinc-300 hover:bg-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-200 font-medium rounded-full text-med px-5 py-2.5 text-center m-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <span class="ml-8 mr-8">My Events</span>
                </button>
            </div>
            <div>

            </div>
        </div>
    );
  }