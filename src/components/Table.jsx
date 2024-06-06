
export default function Table({table}) {
  return (
    <div className="m-4  rounded-lg h-fit w-fit border border-black shadow-md">
    <div className="p-4 align-middle text-sm">
      <div className="flex">
        <p className="font-bold pt-2">Table #:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.Table}</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">PR:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.PR}</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Name:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.Name}</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2"> Cost:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.Cost}$</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Number of People:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.NumberOfPeople}</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Arrived Inside:</p>
        <p className="pt-2 pl-2 font-semibold"> {table.arrivedInside}</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Amount Paid:</p>
        <p className="pt-2 pl-2 font-semibold">{table.AmountPaid}$</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Amount to pay:</p>
        <p className="pt-2 pl-2 font-semibold">{table.AmountToPay}$</p>
      </div>
      <div className="flex">
        <p className="font-bold pt-2">Drinks:</p>
        <p className="pt-2 pl-2 font-semibold">{table.drinks}</p>
      </div>
      <div className="flex items-center">
        <p className="font-bold pt-2">Payment on Door:</p>
        <p className={`mt-2 ml-2 font-semibold w-[10px] h-[10px] rounded-full ${table.paymentOnDoor ? 'bg-green-400' : 'bg-red-500'}`}></p>
      </div>
      <div className="flex items-center">
        <p className="font-bold pt-2">Booked:</p>
        <p className={`mt-2 ml-2 font-semibold w-[10px] h-[10px] rounded-full ${table.booked ? 'bg-green-400' : 'bg-red-500'}`}></p>
      </div>
      <div className="text-center">
        <button className="p-2 mt-4 rounded-md w-full bg-yellow-500 font-semibold text-black">Edit</button>
      </div>
    </div>
  </div>
  )
}
