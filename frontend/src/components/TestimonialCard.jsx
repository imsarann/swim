export default function TestimonialCard({ name, prof, message }) {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[360px]  rounded-2xl overflow-hidden border-2 bg-gray-100 border-[#294048] transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[8px_8px_0_#294048] hover:border-[#fff] hover:-translate-x-2 hover:-translate-y-2 p-4">
      <div className="flex flex-col h-full    gap-2 transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] text-black">
        {/* Header */}
        <div className=" mx-3 mt-5">
          <strong className="text-lg">{name}</strong>
          <p className="text-sm text-black/80">{prof}</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col mt-5 min-h-[100vh]  items-start ">
            <svg viewBox="0 0 24 24" className="w-12 h-12">
              <path
                fill="black"
                d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
              />
            </svg>
            <p className="text-base text-black/80">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
