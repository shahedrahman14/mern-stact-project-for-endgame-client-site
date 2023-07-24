import useCollege from "../../Hooks/useCollege";


const ImageGallery = () => {
    const [college] = useCollege([]);
    return (
       <div className="mx-auto ">
          <h1 className="mt-16 text-3xl underline  text-center mb-6 font-bold">Photo Gallery: </h1>
        <div  className="mx-auto flex">
        <div className="grid  sm:grid-cols-2 hover:shadow-lime-500 md:grid-cols-3  xl:grid-cols-4 mx-auto px-2 gap-10 ">
          
          {
           college.map(singleCollege=> <div key={singleCollege.id} className="border-2 w-72">
           <div className="w-full hover:scale-125 duration-500 rounded-lg">
             <img src={singleCollege?.graduationPhoto} alt="graduation photo " />
           </div>
           
         </div>)
          }
       </div>
        </div>
       </div>
    );
};

export default ImageGallery;