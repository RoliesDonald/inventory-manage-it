import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

export default async function NewItem({ selectedData = {}, isUpdate = false }) {
  const categoryOptions = getData("category");
  const brandOptions = getData("brand");
  const supplierOptions = getData("supplier");
  const unitOptions = getData("unit");
  const warehouseOptions = getData("warehouse");
  const variantOptions = getData("variant");
  const typeOptions = getData("type");

  const [categories, brand, supplier, units, warehouse, variant, type] =
    await Promise.all([
      categoryOptions,
      brandOptions,
      supplierOptions,
      unitOptions,
      warehouseOptions,
      variantOptions,
      typeOptions,
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
        variant={variant}
        type={type}
        selectedData={selectedData}
        isUpdate={isUpdate}
      />
      {/* Bottom */}
    </div>
  );
}
