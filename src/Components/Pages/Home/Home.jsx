import College from "./College";
import ImageGallery from "./ImageGallery";
import ResearchPaper from "./ResearchPaper";
import Review from "./Review";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="mx-auto mt-24 flex">
      <div className="form-control mx-auto ">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
      <College></College>
      <ImageGallery></ImageGallery>
      <ResearchPaper></ResearchPaper>
      <Review></Review>
    </div>
  );
};

export default Home;
