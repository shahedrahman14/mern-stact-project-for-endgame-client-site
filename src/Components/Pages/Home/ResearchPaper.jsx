import useResearch from "../../Hooks/useResearch";

const ResearchPaper = () => {
    const [research]=useResearch()
    return (
        <div className="my-12">
            <h1 className="text-2xl font-bold underline text-center mb-4">Research Paper Links:</h1>
           <div className=" text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
                research.map(search=><div className="  shadow-md bg-base-100 card hover:scale-105 duration-300 hover:shadow-lime-500  p-6" key={search.id}>
                    <div >
                    <h1>Title: {search?.title}</h1>
                    <h1>Researched By: {search?.researched_by}</h1>
                    <div>
                        Link: <a className="underline text-blue-500" href={search?.link}>See Paper</a>
                    </div>
                </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default ResearchPaper;