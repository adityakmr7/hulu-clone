import React,{useState} from 'react'
import { Tab } from "@headlessui/react";
import Image from "next/image";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
function SpotLight() {
    const [selected ,setSelected] = useState('LIVE SPORTS');
  const [categories] = useState({
    "LIVE SPORTS": [
      {
        id: 1,
        title: "Live Sports",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419730/07_jbqlrv.jpg",
        description:
          "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
      },
    ],
    "BREAKING NEWS": [
      {
        id: 2,
        title: "BREAKING NEWS",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/05_itowaz.jpg",
        description:
          "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
      },
    ],
    "BIGGEST EVENTS": [
      {
        id: 3,
        title: "BIGGEST EVENTS",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/06_amgfad.jpg",
        description:
          "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
      },
    ],
  });

  const handleSelection = (v) => {
  
    setSelected(v);

  };
  return (
   <div
   style={{
    backgroundImage: `url(${categories[selected][0].imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }}
    className='h-screen bg-black flex-col flex justify-center'>

<div
        className={`flex flex-col justify-center w-2/3 m-auto h-3/6`}
      >
        <div>
          <Tab.Group>
            <Tab.List className=" w-6/12 space-x-8 ">
              {Object.keys(categories).map((category) => (
                <Tab
                  
                  key={category}
                  className={({ selected }) => {
                    return classNames(
                      " text-sm space-x-3 leading-5 font-medium text-white ",
                      "focus:outline-none focus:ring-2 ring-opacity-60"
                    );
                  }}
                >
                  <p onClick={() => handleSelection(category)}>{category}</p>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "text-white w-4/12 my-11",
                    "focus:outline-none focus:ring-2 "
                  )}
                >
                  <ul>
                    {posts.map((post, i) => (
                      <li
                        key={i}
                        className=" p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="my-10  font-bold text-xxl text-primary   leading-5">
                          {post.title}
                        </h3>
                        <p className="text-primary">{post.description}</p>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
   </div>
  )
}

export default SpotLight