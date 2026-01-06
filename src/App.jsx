
function App() {

  return (
    <div className="bg-blue-200 h-screen flex font-mono">
      <div className="bg-blue-100 flex flex-col gap-4 self-center mx-10 px-4 rounded-lg">
      <div className="md:bg-[url(./images/pattern-background-desktop.svg)] bg-[url(./images/pattern-background-mobile.svg)] bg-cover bg-no-repeat h-10">
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-Blue950 mb-2">Order Summary</h1>
        <p className="text-Gray600">You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like</p>
      </div>
      <div className="flex justify-between bg-Blue50 py-4 px-4 rounded-2xl">
        <img src="./images/icon-music.svg" alt="music" />
        <div className="flex flex-col gap-1"><p className="font-bold text-Blue950">Annual plan</p>
        <p className="text-Gray600 ">$59.99/year</p></div>
        <p className="underline self-center text-Blue700 cursor-pointer">Change</p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-Blue700 font-bold text-white p-4 rounded-lg shadow-xl shadow-black/50">proceed to Payment</button>
        <button className="p-4 mb-4 text-Blue950">Cancel Order</button>
      </div>
      </div>
    </div>
  )
}

export default App
