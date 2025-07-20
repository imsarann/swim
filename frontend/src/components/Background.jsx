
export default function Background({ children }) {
  return (
    <div className="bg-Navbar relative overflow-hidden">
      


      {/* <div className="bg-Main min-h-[300px]"></div> */}
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/4wave.svg')" }}
      /><div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/4wave.svg')" }}
      />
      {/* <div className="bg-Main min-h-[300px]"></div> */}
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/4wave.svg')" }}
      /><div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/4wave.svg')" }}
      />
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/4wave.svg')" }}
      />
      {/* <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      />
       <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      /> <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      /> <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      /> <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      /> */}
      {/* <div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/wave4-3.svg')" }}
      />
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wave4.svg')" }}
      />
      <div
        className="w-full min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/assets/wave4-3.svg')" }}
      /> */}

      {/* 👇 Add this */}
      <div className="absolute inset-0 z-10">
        {children}
      </div>
    </div>
  );
}
