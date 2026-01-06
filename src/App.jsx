
function App() {

  return (
    <div className="md:bg-[url(./images/pattern-background-desktop.svg)] bg-[url(./images/pattern-background-mobile.svg)] bg-cover bg-no-repeat h-screen flex font-mono px-15  md:px-50 lg:px-100">
      <div className="bg-Blue50 flex flex-col gap-4 self-center rounded-2xl">
      <div className="bg-[url(./images/illustration-hero.svg)] bg-cover bg-no-repeat rounded-t-2xl">
        <img src="./images/illustration-hero.svg" alt="" className="w-full h-full rounded-2xl"/>
      </div>
      <div className="text-center mx-10">
        <h1 className="text-2xl font-bold text-Blue950 mb-2">Order Summary</h1>
        <p className="text-Gray600">You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like</p>
      </div>
      <div className="flex justify-between mx-10 bg-Blue100/70 py-4 px-4 rounded-2xl">
      <div className="flex gap-2">
        <img src="./images/icon-music.svg" alt="music" />
        <div className="flex flex-col gap-1"><p className="font-bold text-Blue950">Annual plan</p>
        <p className="text-Gray600 ">$59.99/year</p></div>
        </div>
        <p className="underline self-center text-Blue700 cursor-pointer">Change</p>
      </div>
      <div className="flex flex-col mx-10 gap-2">
        <button className="bg-Blue700 hover:bg-blue-400 transition-colors duration-300 font-bold text-white p-4 rounded-lg shadow-xl shadow-black/50 cursor-pointer">proceed to Payment</button>
        <button className="p-4 mb-4 font-bold text-Blue950 cursor-pointer">Cancel Order</button>
      </div>
      </div>
    </div>
  )
}

export default App
