import { useState } from "react";

export default function Table({ table, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...table });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = () => {
    onUpdate(editData);
    setIsEditing(false);
  };

  return (
    <div className="m-4 rounded-lg w-full h-fit tablet:w-fit border border-black shadow-md">
      <div className="p-4 align-middle text-sm">
        {isEditing ? (
          <>
            <div className="flex">
              <label className="font-bold pt-2">Table #:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="Table"
                value={editData.Table}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">PR:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="PR"
                value={editData.PR}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Name:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="Name"
                value={editData.Name}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Cost:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="Cost"
                value={editData.Cost}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Number of People:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="NumberOfPeople"
                value={editData.NumberOfPeople}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Arrived Inside:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="arrivedInside"
                value={editData.arrivedInside}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Amount Paid:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="AmountPaid"
                value={editData.AmountPaid}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Amount to pay:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="AmountToPay"
                value={editData.AmountToPay}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <label className="font-bold pt-2">Drinks:</label>
              <input
                className="pt-2 pl-2 font-semibold"
                name="drinks"
                value={editData.drinks}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold pt-2">Payment on Door:</label>
              <input
                type="checkbox"
                className="ml-2"
                name="paymentOnDoor"
                checked={editData.paymentOnDoor}
                onChange={(e) =>
                  setEditData({ ...editData, paymentOnDoor: e.target.checked })
                }
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold pt-2">Booked:</label>
              <input
                type="checkbox"
                className="ml-2"
                name="booked"
                checked={editData.booked}
                onChange={(e) =>
                  setEditData({ ...editData, booked: e.target.checked })
                }
              />
            </div>
            <div className="text-center">
              <button
                className="p-2 mt-4 rounded-md w-full bg-green-500 font-semibold text-white"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
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
              <p className="font-bold pt-2">Cost:</p>
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
              <p
                className={`mt-2 ml-2 font-semibold w-[10px] h-[10px] rounded-full ${
                  table.paymentOnDoor ? "bg-green-400" : "bg-red-500"
                }`}
              ></p>
            </div>
            <div className="flex items-center">
              <p className="font-bold pt-2">Booked:</p>
              <p
                className={`mt-2 ml-2 font-semibold w-[10px] h-[10px] rounded-full ${
                  table.booked ? "bg-green-400" : "bg-red-500"
                }`}
              ></p>
            </div>
            <div className="text-center">
              <button
                className="p-2 mt-4 rounded-md w-full bg-yellow-500 font-semibold text-black"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
