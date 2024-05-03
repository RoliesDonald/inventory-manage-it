import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
export default function DataTable({ data = [], columns = [], sourceItem }) {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full rounded-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((columnName, i) => {
              return (
                <th key={i} scope="col" className="px-6 py-3">
                  {columnName}
                </th>
              );
            })}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
              >
                {columns.map((columnName, i) => (
                  <td key={i} className="px-6 py-4">
                    {columnName.includes(".") ? (
                      columnName.split(".").reduce((obj, key) => obj[key], item)
                    ) : columnName === "createdAt" ||
                      columnName === "updatedAt" ? (
                      new Date(item[columnName]).toLocaleDateString()
                    ) : columnName === "imageUrl" ? (
                      <img
                        src={item[columnName]}
                        alt={`Image for ${sourceItem}`}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    ) : (
                      item[columnName]
                    )}
                  </td>
                ))}

                <td className="px-2 py-4 flex items-center ">
                  <Link
                    href={`/dashboard-inventory/inventory/${sourceItem}/update/${item.id}`}
                    className="font-medium text-blue-600 dark:text-slate-800 hover:underline flex items-center mx-1 dark:bg-slate-300 px-2 rounded space-x-2"
                  >
                    <MdOutlineEdit className="w-5 h-5" />
                  </Link>
                  <DeleteBtn id={item.id} endpoint={sourceItem} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
