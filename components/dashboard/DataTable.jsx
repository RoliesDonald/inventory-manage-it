import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
export default function DataTable({ data, columns }) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                {columns.map((columnName, i) => {
                  return (
                    <td key={i} className="px-6 py-4 ">
                      {item[columnName]}
                    </td>
                  );
                })}

                <td className="px-2 py-4 flex items-center ">
                  <Link
                    href="#"
                    className="font-medium text-blue-600 dark:text-slate-800 hover:underline flex items-center mx-1 dark:bg-slate-300 px-2 rounded space-x-2"
                  >
                    <MdOutlineEdit className="w-5 h-5" />
                  </Link>
                  <button className="font-medium text-red-600 dark:text-slate-800 hover:underline flex items-center mx-1 dark:bg-slate-300 px-2 rounded">
                    <FaRegTrashCan className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
