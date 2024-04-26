import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default async function NewAdjustment() {
  const itemsOptions = getData("items");
  const warehouseOptions = getData("warehouse");
  const brandOptions = getData("brand");
  const categoriesOptions = getData("categories");

  const [items, warehouse, brands, categories] = await Promise.all([
    itemsOptions,
    warehouseOptions,
    brandOptions,
    categoriesOptions,
  ]);
  return (
    <AdjustmentForm
      items={items}
      warehouse={warehouse}
      brands={brands}
      categories={categories}
    />
  );
}
