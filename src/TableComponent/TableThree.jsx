import React, { useEffect, useState } from "react";
import { TbArrowsUpDown } from "react-icons/tb";
const TableThree = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch(`tableTaskData.json`)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  const [order, setOrder] = useState("asc");

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...tableData].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setTableData(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...tableData].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setTableData(sorted);
      setOrder("asc");
    }
  };
  return (
    <div className="overflow-x-auto my-9 text-base font-normal">
      <table className="table border  border-slate-400 table-zebra ">
        <thead>
          <tr className="border  border-slate-400">
            <th className="border w-[328px] h-[40px] border-gray-300">
              <div>
                <div>
                  <div className="font-bold">Email Address</div>
                </div>
              </div>
            </th>

            <th className="border w-[237px] h-[40px] border-gray-300">
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Joining Date</div>
                </div>
                <div>
                  <div className="font-bold">
                    <TbArrowsUpDown
                      onClick={() => sorting("joiningDate")}
                      className="font-bold text-sm ml-2"
                    />
                  </div>
                </div>
              </div>
            </th>

            <th className="border w-[237px] h-[40px] border-gray-300">
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Role</div>
                </div>
                <div>
                  <div className="font-bold">
                    <TbArrowsUpDown
                      onClick={() => sorting("role")}
                      className="font-bold text-sm ml-2"
                    />
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((tab, i) => (
            <tr key={i}>
              <td className="border text-base font-normal border-gray-300">
                {tab.email}
              </td>

              <td className="border border-gray-300">{tab.joiningDate}</td>

              <td className="border border-gray-300">{tab.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableThree;
