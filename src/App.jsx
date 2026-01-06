
function App() {

  return (
    <div className="bg-blue-200 h-screen flex">
      <div className="bg-blue-50 flex flex-col gap-4 self-center mx-10 px-4">
      <div className="md:bg-[url(./images/pattern-background-desktop.svg)] bg-[url(./images/pattern-background-mobile.svg)] bg-cover bg-no-repeat h-10">
      </div>
      <div className="text-center">
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like</p>
      </div>
      <div className="flex justify-between">
        <img src="./images/icon-music.svg" alt="music" />
        <div className="flex flex-col gap-1"><p>Annual plan</p>
        <p>$59.99/year</p></div>
        <p>Change</p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-Blue700 p-4 rounded-lg shadow-xl shadow-black/50">proceed to Payment</button>
        <button className="p-4 mb-4">Cancel Order</button>
      </div>
      </div>
    </div>
  )
}

export default App
