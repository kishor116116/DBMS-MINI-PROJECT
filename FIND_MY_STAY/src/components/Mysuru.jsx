import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";


const data = {
  vijayanagara: [
    {
      name: "Sunshine Residency",
      rent: 12000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse1.mm.bing.net/th?id=OIP.tlr14wUKVqV1G0bLsEdEYAHaEJ&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.hIHO6cuNVcn2KsJ-hmweNQHaFm&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.4BoVMBGTQWGi7OA1-mFkpgHaE8&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Green Nest Apartments",
      rent: 8500,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.VH0Q1UCsPOOxSQPgEBVyfwHaEJ&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.EplA9jWrhvA6p1yJouceUgHaE8&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.emgI4cZHdf0985y7LL2nDQHaKJ&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "vijayanagara Cozy Corner",
      rent: 11000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse3.mm.bing.net/th?id=OIP.-1v_CI9ohrGaW1Yx8DLdNwHaFj&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.pMYzWRlV8oLjNYvs_QvGAQHaE8&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.yDuwKSpFZe5mGOlLe0lgRAHaE8&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Modern Living vijayanagara",
      rent: 13000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.oSsYm7a5-P6JF7ggkEQKvAHaFu&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.TK2y95FA-nadPiCXjwt4PwHaJ4&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.mgRWBC5dVkFJ3sm7_jLcAgHaFj&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "vijayanagara Central Apartments",
      rent: 9000,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.uVTrquPvJlXZfgz4JCOMiAHaFU&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.T1u520fhvCpDXA7R1IP83QHaEo&pid=Api&P=0&h=180",
        "https://i2.wp.com/www.trendecors.com/wp-content/uploads/2019/07/Rustic-Tiny-House-Interior-Design-Ideas-You-Must-Have-12.jpg?fit=1024%2C1024&ssl=1"
      ]
    },
  ],
  Gokulam: [
    {
      name: "Urban Heights",
      rent: 15000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/636b531769954a001cf76455.jpg",
        "https://wallpaperaccess.com/full/2470869.jpg",
        "https://static.vecteezy.com/system/resources/previews/022/819/322/non_2x/interior-background-of-living-room-with-stucco-wall-vase-with-twig-on-decorative-accent-coffee-table-empty-mock-up-wall-and-wooden-flooring-pendant-light-modern-home-decor-ai-generated-free-photo.jpeg"
      ]
    },
    {
      name: "Gokulam Delight",
      rent: 9500,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2022/9/GH/XS/JA/52929368/3d-front-elevation-designing-service-500x500.jpg",
        "https://i.ytimg.com/vi/zumJJUL_ruM/maxresdefault.jpg",
        "https://cdn.home-designing.com/wp-content/uploads/2017/05/stone-and-charcoal-luxury-house-elevation.jpg"
      ]
    },
    {
      name: "Gokulam Luxe Apartments",
      rent: 14000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/110def43377619.57ecc2652512c.jpg",
        "https://tse3.mm.bing.net/th?id=OIP.SVKvnbq_eQ4XGnumq7ZGgwHaE8&pid=Api&P=0&h=180",
        "https://letmatch.blob.core.windows.net/photo/6b4fa810-be10-40be-9dee-aef6ec5f4f13.jpg"
      ]
    },
    {
      name: "Gokulam Cozy Homes",
      rent: 12000,
      floor: "Ground Floor",
      type: "2BHK",
      images: [
        "https://tse1.mm.bing.net/th?id=OIP.o6z3UuOGlO1jNXSPMsa1KQHaE7&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.XUYfFdJaik5LvPM_Oy5mlQHaFj&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.upnVdx_tRKozFJAvPzkzDwHaE8&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Prime Location PG",
      rent: 10000,
      floor: "First Floor",
      type: "1BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.RI9qlULMIhWzlbyRrtHOhgHaFD&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.ZWzMYNsW46MTKack519BiQHaE8&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.0FlW9ZOQWhhj2F7mzVWBtAHaE8&pid=Api&P=0&h=180"
      ]
    },
  ],
  Hebbal: [
    {
      name: "Palm Grove Residency",
      rent: 10000,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://pocket-image-cache.com/direct?resize=w2000&url=https:%2F%2Fassets.bwbx.io%2Fimages%2Fusers%2FiqjWHBFdfxIU%2FixPdSl7.SV8A%2Fv1%2F-1x-1.jpg",
        "https://i.pinimg.com/originals/5b/16/dc/5b16dc0b379e72eb39414372013bca7b.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.dT_su_bpP7d3lYJrhFsrZQHaLc&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Hebbal Comfort Homes",
      rent: 12000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse2.mm.bing.net/th?id=OIP.rVSk8afHEaW5W3Ka2KsqLAAAAA&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIF.i5lOuAxgdfQjnFRTPHRF9g&pid=Api&P=0&h=180",
        "https://imagecdn.99acres.com/media1/29589/18/591798317M-1746095428566.webp"
      ]
    },
    {
      name: "Hebbal Green Apartments",
      rent: 9000,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://imagecdn.99acres.com/media1/29285/3/585703615M-1744357079607.webp",
        "https://imagecdn.99acres.com/media1/28947/5/578945153M-1742456132355.webp",
        "https://imagecdn.99acres.com/media1/29756/15/595135979M-1747036776741.webp"
      ]
    },
    {
      name: "Hebbal Park Residency",
      rent: 13000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIF.vU4p%2fspXmsKpYJ2sKXGXXw&pid=Api&P=0&h=180",
        "https://imagecdn.99acres.com/media1/26736/16/534736403M-1746854502498.webp",
        "https://imagecdn.99acres.com/media1/29792/8/595848319M-1747218977146.webp"
      ]
    },
    {
      name: "Hebbal Serenity Homes",
      rent: 8500,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://tse1.mm.bing.net/th?id=OIF.u%2fz6mBELohh71D04kpCfhw&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIF.e31DXpvH8gwbSC5kuiYs9Q&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIF.5RJVP2zGDueUzctFAiFDsg&pid=Api&P=0&h=180"
      ]
    },
  ],
  "palace road": [
    {
      name: "Tech Garden Homes",
      rent: 9000,
      floor: "First Floor",
      type: "1BHK",
      images: [
        "https://focalassetsproductioncdn.azureedge.net/orders2022/1300975/photosfinal/3f7a8165.jpg",
        "http://www.gz-rent.com/wp-content/uploads/2019/08/002-1.jpg",
        "https://csrealty.in/wp-content/uploads/2023/01/builder-floor.jpg"
      ]
    },
    {
      name: "palace road Towers",
      rent: 10000,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.Rwo5s_WtHHCxDD_z4ePPcAHaE8&pid=Api&P=0&h=180",
        "https://letmatch.blob.core.windows.net/photo/1b224d59-d010-425a-9034-dd4644b5c794.jpg",
        "https://purplebricks-photography.imgix.net/orders2022/1305479/photosfinal/scottsdale-22.jpg"
      ]
    },
    {
      name: "palace road Prime Stay",
      rent: 9500,
      floor: "First Floor",
      type: "1BHK",
      images: [
        "https://purplebricks-properties.imgix.net/images/bf29b3a7-3ee2-42b3-af9f-4e92e13914e6.jpg?w=659&h=438&fit=crop&crop=right&auto=compress%2Cformat&fm=jpg",
        "https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/8f13dd08-a7a9-4b75-ead3-6df869efd200/86",
        "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/PCEAAOSwHt5bO4sl/$_86.JPG"
      ]
    },
    {
      name: "Tech Haven Apartments",
      rent: 11000,
      floor: "First Floor",
      type: "2BHK",
       images: [
        "https://tse4.mm.bing.net/th?id=OIP.UcgfyKDLXfHrTunkYjOHoAHaE8&pid=Api&P=0&h=180",
        "https://i.pinimg.com/originals/f3/81/9e/f3819e70e1c215a807ec1f6f8d5688bc.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.upnVdx_tRKozFJAvPzkzDwHaE8&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "palace road Cozy Residency",
      rent: 8500,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/636b531769954a001cf76455.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.upnVdx_tRKozFJAvPzkzDwHaE8&pid=Api&P=0&h=180",
        "https://i.pinimg.com/originals/f3/81/9e/f3819e70e1c215a807ec1f6f8d5688bc.jpg"
      ]
    },
  ],
  bogadhi: [
    {
      name: "Elite Comfort PG",
      rent: 11000,
      floor: "Ground Floor",
      type: "2BHK",
      images: [
        "https://tse4.mm.bing.net/th?id=OIP.pDQMmBDRxrD5jnCBT7VNjwAAAA&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIF.fSRI9OXvCqxolyWqy0ttUg&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.YpJf1B-L3MMXm2q3pb_VxQAAAA&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "bogadhi Serenity",
      rent: 13000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse1.mm.bing.net/th?id=OIP.Gi76cLLSI7jvGsG6n40e8wAAAA&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIF.bf4gyl47LNHmfXf64E8XTw&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.EZV9mejBl5CkMn2HEefxDAHaEH&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "bogadhi Green Residency",
      rent: 9000,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/636b531769954a001cf76455.jpg",
        "https://tse2.mm.bing.net/th?id=OIP.JoMSDDftUUA816Go9j68HwHaE8&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.qRK3Q-oq6pV3xpqu8QpVnwHaJQ&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "bogadhi Prime Stay",
      rent: 12000,
      floor: "First Floor",
      type: "2BHK",
      images: [
        "https://tse2.mm.bing.net/th?id=OIP.davKFI3QY1gYo22_PEFaJQHaEs&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.EZV9mejBl5CkMn2HEefxDAHaEH&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.SSlT5b-VHsIuDaXlWqwzwwHaE8&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Cozy PG bogadhi",
      rent: 8500,
      floor: "Ground Floor",
      type: "1BHK",
      images: [
        "https://tse2.mm.bing.net/th?id=OIP.sSfBZPQbA_GXFpffnoEGnAHaE3&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.cV0BQwecVQLL8fjeqVdWZwHaEK&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.2mzpGid3ckgcqxbJHJk8qgHaGs&pid=Api&P=0&h=180"
      ]
    },
  ],
};


function HouseCard({ house }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const imageWidth = 320; // Same as w-80 (in pixels)

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= imageWidth;
      } else {
        container.scrollLeft += imageWidth;
      }
    }
  };


  const images = house?.images || [];

  return (
    <div className="border rounded-lg shadow hover:shadow-md transition duration-200 bg-white w-full max-w-[322px] mx-auto">
      <div className="relative w-80 overflow-hidden">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-400 rounded-full p-1 z-10 opacity-50 w-8 h-8"
          aria-label="Scroll images left"
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar"
          style={{ scrollBehavior: "smooth", width: '100%' }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className="w-80 h-48 object-cover flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-400 rounded-full p-1 z-10 opacity-50 w-8 h-8"
          aria-label="Scroll images right"
        >
          &#8594;
        </button>
      </div>


      <div className="p-3 space-y-1">
        <h3 className="text-lg font-semibold text-blue-600">{house.name}</h3>
        <p className="text-sm text-gray-700">Rent: ₹{house.rent}</p>
        <p className="text-sm text-gray-700">Floor: {house.floor}</p>
        <div className="flex justify-between mr-4">
          <p className="text-sm text-gray-700">Type: {house.type}</p>
          <Link to="/Book" className="bg-black text-white w-24 h-10 rounded-2xl flex font-semibold opacity-90 justify-center items-center">Book Now</Link> 
             </div>
      </div>
    </div>
  );
}

export default function BangaloreStay() {
  const [selectedArea, setSelectedArea] = useState("vijayanagara");
  const [budget, setBudget] = useState("All");
  const [floor, setFloor] = useState("All");
  const [bhk, setBHK] = useState("All");

  const filterListings = () => {
    return data[selectedArea].filter((item) => {
      const matchBudget =
        budget === "All" ||
        (budget === "₹5k - ₹10k" && item.rent >= 5000 && item.rent <= 10000) ||
        (budget === "₹10k - ₹15k" && item.rent > 10000 && item.rent <= 15000);

      const matchFloor = floor === "All" || item.floor === floor;
      const matchBHK = bhk === "All" || item.type === bhk;

      return matchBudget && matchFloor && matchBHK;
    });
  };

  const filteredData = filterListings();

  return (
    <div className="p-4 md:px-10 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Find My Stay - Bangalore
      </h1>

      <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow overflow-hidden">
        {/* Sidebar */}
        <div className="md:w-[15%] border-r border-gray-300 p-4 bg-gray-50">
          <div className="mb-6">
            <label className="block font-semibold mb-2">Choose Area:</label>
            <select
              className="w-full border p-2 rounded shadow-sm"
              onChange={(e) => setSelectedArea(e.target.value)}
              value={selectedArea}
            >
              {Object.keys(data).map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Budget</label>
            <select
              className="border p-1 w-full rounded"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option>All</option>
              <option>₹5k - ₹10k</option>
              <option>₹10k - ₹15k</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Floor</label>
            <select
              className="border p-1 w-full rounded"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            >
              <option>All</option>
              <option>Ground Floor</option>
              <option>First Floor</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">BHK Type</label>
            <select
              className="border p-1 w-full rounded"
              value={bhk}
              onChange={(e) => setBHK(e.target.value)}
            >
              <option>All</option>
              <option>1BHK</option>
              <option>2BHK</option>
            </select>
          </div>
        </div>

        {/* Listings */}
        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => <HouseCard key={index} house={item} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No results found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}