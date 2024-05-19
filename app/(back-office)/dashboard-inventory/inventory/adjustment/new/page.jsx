import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default async function NewAdjustment() {
  const itemsOptions = getData("items");
  const warehouseOptions = getData("warehouse");
  const brandOptions = getData("brand");
  const categoriesOptions = getData("category");
  const supplierOption = getData("supplier");

  const [items, warehouse, brands, category, supplier] = await Promise.all([
    itemsOptions,
    warehouseOptions,
    brandOptions,
    categoriesOptions,
    supplierOption,
  ]);
  return (
    <AdjustmentForm
      items={items}
      warehouse={warehouse}
      brands={brands}
      category={category}
      supplier={supplier}
    />
  );
}
