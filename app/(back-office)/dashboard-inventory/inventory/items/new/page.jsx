import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

export default async function NewItem({ selectedData = {}, isUpdate = false }) {
  const categoryOptions = getData("categories");
  const brandOptions = getData("brand");
  const supplierOptions = getData("supplier");
  const unitOptions = getData("units");
  const warehouseOptions = getData("warehouse");

  const [categories, brand, supplier, units, warehouse] = await Promise.all([
    categoryOptions,
    brandOptions,
    supplierOptions,
    unitOptions,
    warehouseOptions,
  ]);

  return (
    <div className="justify-between w-full p-4 border-b border-gray-200 dark:border-gray-600">
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Item" : "New Item"}
        href="/dashboard-inventory/inventory/items"
      />
      {/* Form */}
      <CreateItemForm
        category={categories}
        unit={units}
        brand={brand}
        supplier={supplier}
        warehouse={warehouse}
        selectedData={selectedData}
        isUpdate={true}
      />
      {/* Bottom */}
    </div>
  );
}
