// import React, {useState, forwardRef} from 'react'
// import FlipMove from 'react-flip-move'


// const About = () => {

//   const [items, setItems]=useState(['Item 1','Item 2', 'Item 3' ])

//   const handleAddItems =  ()=>{
//     const newItem = `Item ${items.length + 1}`;
//     setItems([...items, newItem]);

//   }

//   return  (
//     <div className='m-8 text-xl text-center'>
//       <button onClick={handleAddItems} className='py-4 bg-indigo-500 ... w-40 rounded-full' m-10 text-lg>Add Item</button>
//       <FlipMove >
//         {
          
//           items.map((x, index)=> {
//             return (
//               <div key={index} className='py-4'>
//                  {x}
//               </div>
//             );      
//           })
          
//         }
//       </FlipMove>



//     </div>
//   )
// }

// export default About

import React, { useState } from 'react';
import FlipMove from 'react-flip-move';

const About = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleAddItems = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div className="m-8 text-center">
      <button
        onClick={handleAddItems}
        className="py-2 px-4 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
      >
        Add Item
      </button>
      <div className="mt-8">
        <FlipMove
        className="space-y-4"
        enterAnimation="fade"
        leaveAnimation="fade"
        duration={500}
        >
          {items.map((x, index) => (
            <div
              key={index}
              className="py-4 px-6 bg-gray-300 border border-gray-200 rounded-full"
            >
              {x}
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default About;