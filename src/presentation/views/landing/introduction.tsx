export default function Introduction() {
  return (
    <div className="givelayout py-[2rem] tab:py-[3rem]">
      <div className="text-center rounded-[1rem] py-[2rem] tab:py-[4rem] bg-[#0066F5] text-white px-[1rem]">
        <div className="tab:max-w-[60%] laptop:max-w-[40%] mx-auto ">
          <h1 className="text-[2rem] tab:text-[50px] font-[900] leading-[100%]">
            Ability Assess Assessment Platform
          </h1>
          <p className="mt-[1.2rem] text-white">
            {`We offer comprehensive tools and methodologies for special education
        assessments, ensuring personalized and effective support for unique
        needs`}
          </p>

          <div className="relative flex items-center mx-auto mt-[2rem]">
            <input
              type="text"
              className="rounded-[0.5rem] py-[1rem] w-full px-[1rem]"
              placeholder="Search for an assessment"
            />
            <button className="bg-[#0066F5] rounded-[0.5rem] px-[2rem] py-[0.6rem] absolute right-[0.5rem]">
                Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
