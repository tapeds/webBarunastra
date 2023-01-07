import Image from "next/image"

const Quote = () => {
  return(
    <div className="flex items-center justify-center h-screen bg-[url(/background2.jpg)] bg-contain">
      <div className="max-w-6xl p-5 bg-[#A69FF5] bg-opacity-30 rounded-3xl">
        <p className="text-2xl text-center text-white">
          “Rather, seek the 'reward' of the Hereafter by means of what Allah has granted you, 
          without forgetting your share of this world. And be good ‘to others’ as Allah has been 
          good to you. Do not seek to spread corruption in the land, for Allah certainly does not 
          like the corruptors.” (QS. Al-Qasas:77)
        </p>
      </div>
    </div>
  )
}

export default Quote