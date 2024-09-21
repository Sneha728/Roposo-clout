import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Accessories = () => {
    const items = [
        {
            id:0,
            img:"https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?cs=srgb&dl=pexels-fotios-photos-1090638.jpg&fm=jpg",
            title:(
                <>
                    Quirky Home <br /> Essentials
                </>
            ),

        },
        
        {
            id:1,
            img : "https://w7.pngwing.com/pngs/760/24/png-transparent-cosmetics-youcam-android-makeover-makeup-fashion-lipstick-makeup-brushes.png",
            title:(
                <>
                    Beauty & <br /> Personal Care
                </>
            ),
        },
        {
            id:2,
            img:"https://thepurplepopshop.com/cdn/shop/files/LeatherKeyHolder2_44e27d1f-b0df-48a4-a79d-5743f829d6e2_533x.png?v=1718688740",
            title:(
                <>
                    Car & Bike<br /> Accessories
                </>
            ),
        },
        {
            id:3,
            img:"https://pngimg.com/d/dumbbell_PNG16389.png",
            title:(
                <>
                    Gym & <br /> Wellness
                </>
            ),
        },
        {
            id:4,
            img:"https://t3.ftcdn.net/jpg/03/68/70/68/360_F_368706830_73uRxdyNcR74dBv98x9NlibuG52qbJlZ.jpg",
            title: (
                <>
                  Footwear
                </>
              )
        },
        {
            id:5,
            img:"https://w7.pngwing.com/pngs/117/717/png-transparent-watch-nixon-fashion-accessory-woman-strap-women-s-watch-blue-women-accessories-holidays.png",
            title:"Accessories"
        },
        {
            id:6,
            img:"https://clarkesjewellery.co.uk/wp-content/uploads/2024/07/Infinity-Number-Chain-400x400.png",
            title:"Jewellery"
        },{
            id:7,
            img:"https://img.freepik.com/premium-vector/colorful-pencil-case-with-pink-purple-pencils-it_1220218-11566.jpg",
            title:" Kids"
        },
        {
            id:8,
            img:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTJfM2RfcmVuZGVyX2ljb25fb2ZfaGVhZHBob25lc19fbWluaW1hbF95MmtfYWVzdF82NWQyM2VjYy0yOWUzLTQyOGItYjI1My1iMDkxNmQyZDM0MDFfMS5qcGc.jpg",
            title:"Electronics"
        },
        {
            id:9,
            img : "https://www.pngall.com/wp-content/uploads/8/Home-Kitchen-Appliances-PNG-Clipart.png",
            title:(
                <>
                    Kitchen <br /> Appliances
                </>
            ),
        },
        {
            id:10,
            img:"https://www.pymnts.com/wp-content/uploads/2022/03/Apple-devices.jpg",
            title:(
                <>
                    Gadgets
                </>
            ),
        },
        {
            id:11,
            img:"https://theskinstory.in/cdn/shop/files/WEBSITE_NAVIGATION_-_SQUARE_1.png?v=1708671747&width=1100",
            title:(
                <>
                    Skin Care <br /> Products
                </>
            ),
        },
        {
            id:12,
            img:"https://i.pinimg.com/736x/11/9e/20/119e20f185a51ab60eea8f99e21f3e19.jpg",
            title: (
                <>
                  Perfumes
                </>
              )
        },
        {
            id:13,
            img:"https://www.globalsportsmart.com/data_images/thumbs/New-Rahul-Sports-logo.jpg",
            title: (
                <>
                  Sports
                </>
              )
        },
        {
            id:14,
            img:"https://content.jdmagicbox.com/comp/def_content/toy-shops/shutterstock-329683400-toy-shops-4-epawh.jpg?clr=",
            title: (
                <>
                 Toys & Games
                </>
              )
        },
        {
            id:15,
            img:"https://static.vecteezy.com/system/resources/previews/023/160/393/non_2x/kids-clothing-logo-design-vector.jpg",
            title: (
                <>
                 Kids Wear
                </>
              )
        },
        {
            id:16,
            img:"https://wallpapers.com/images/featured/mens-fashion-png-nou41acklwg9b65n.jpg",
            title: (
                <>
                 Mens Wear
                </>
              )
        },
        {
            id:17,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4FBMNkotMinIBkp6wP7K4fCVKoGMptX1wQ&s",
            title: (
                <>
                 Womens Wear
                </>
              )
        },
    ]
    

   const [startIndex , setStartIndex] = useState(0);
   const [itemsPerPage , setItemsPerPage] = useState(9);

   useEffect(()=>{
    const handleResize = () =>{
        if(window.innerWidth < 768 ){
            setItemsPerPage(3);
        }else{
            setItemsPerPage(9);
        }
    }
    handleResize();

    window.addEventListener("resize",handleResize);

    return  () =>{
        window.removeEventListener("resize",handleResize);

    };


   },[]);

   const visibleItems = items.slice(startIndex,startIndex+itemsPerPage);

   const handleNext = () =>{
    const nextIndex = startIndex + itemsPerPage;
    if(nextIndex < items.length){
        setStartIndex(nextIndex);
    }else{
        setStartIndex(0);
    }
   }

   const handlePrev = () =>{
    const prevIndex = startIndex - itemsPerPage;
    if(prevIndex >= 0 ){
        setStartIndex(prevIndex);
    }else{
        setStartIndex(items.length - itemsPerPage);
    }
   }


  return (
    <div className='flex items-center justify-around'>
        <MdKeyboardArrowLeft  className='text-2xl hover:bg-black hover:text-white rounded-full' onClick={handlePrev}/>
        {
            visibleItems.map((item)=>(
                <ul className='flex flex-col items-center' key={item.id}>
                    <li > <img src={item.img} alt={item.title} className="w-16 h-16  rounded-full shadow-md mb-3 bg-gray-950" /></li>
                    <li className=' flex text-center font-semibold text-sm text-gray-500 h-10  '>{item.title}</li>
                </ul>
            ))
        }

        
        <MdKeyboardArrowRight  className=' text-2xl  hover:bg-black hover:text-white rounded-full ' onClick={handleNext}/>
      
    </div>
  )
}

export default Accessories;
