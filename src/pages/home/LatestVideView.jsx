import { Badge } from "@/components/ui/badge";
import { ArrowLeftCircle, ArrowRightCircleIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function () {
  // ========👇 Clock Functionality 👇========
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);
  //   ========👆 End Clock Functionality 👆======

  // ========�� Now Experience Functionality ��========
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === YouTubeVideoLink.length - 1) {
      setSlide(0);
      return;
    }
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide - 1);
  };

  return (
    <>
      <div className="w-full text-white  bg-gradient-to-br from-[#e0f7fa] to-[#e1f5fe]">
        {/* Youtube Video Section */}
        <>
          <div className="flex rounded-md overflow-hidden">
            {YouTubeVideoLink.map((data, index) => (
              <div
                style={{
                  //👉 slide section
                  transform: `translateX(-${slide * 100}%)`,
                }}
                key={index}
              >
                <>
                  <iframe
                    width="700"
                    height="315"
                    src={`https://www.youtube.com/embed/${
                      data.link.split("/").pop().split("?")[0]
                    }`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" // Updated from 'referrerpolicy' to 'referrerPolicy' to match JSX syntax
                    allowFullScreen // Ensure that this attribute is present to enable full-screen mode
                  ></iframe>
                  <div className="md:flex items-center justify-between px-4 pb-2">
                    <div>
                      <h1 className="text-xl text-red-600 font-roboCondensedSan">
                        {data?.title}
                      </h1>
                      <div className="md:flex space-x-2 justify-center items-center pt-1">
                      <Badge>{data?.type}</Badge>
                      <Badge className={"bg-green-500"}>{data?.year}</Badge>
                      </div>
                    </div>

                    {/* Arrow Section */}
                    <div className="flex my-3 items-center justify-start">
                      <div
                        onClick={prevSlide}
                        className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#3333dd] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
                      >
                        <ArrowLeftCircle />
                      </div>
                      <div
                        onClick={nextSlide}
                        className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#3333dd] dark:bg-[#fc8019] hover:bg-green-500 dark:hover:bg-green-500"
                      >
                        <ArrowRightCircleIcon />
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
        </>
      </div>
    </>
  );
}

const YouTubeVideoLink = [
  {
    link: "https://youtu.be/qKfqKNPnR8M?si=4xDN6IDD9uAuhCL9",
    title: "Key Milestones1",
    type: "Nayara Energy",
    year: "Aug 30, 2022",
  },
  {
    link: "https://youtu.be/qXO5rjRb9yA",
    title: "Key Milestones2",
    type: "Waste to Wealth Technology Park - Jaffrabad",
    year: "Jun 18, 2023",
  },
  {
    link: "https://youtu.be/qKfqKNPnR8M?si=4xDN6IDD9uAuhCL9",
    title: "Key Milestones3",
    type: "Nayara Energy",
    year: "Aug 30, 2022",
  },
  {
    link: "https://youtu.be/qXO5rjRb9yA",
    title: "Key Milestones4",
    type: "Waste to Wealth Technology Park - Jaffrabad",
    year: "Jun 18, 2023",
  },
];
