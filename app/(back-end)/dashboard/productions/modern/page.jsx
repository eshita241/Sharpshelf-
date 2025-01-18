"use client";
import React, { useState } from "react";
import SkuCard from "../../../../../components/dashboard/SKU_component";

const Menu = () => {
  const [skus, setSkus] = useState([
    { id: 1, name: "sliced bread 200gm", batchNum:1, lastUpdated: "3 months", quantity: 0 },
    { id: 1, name: "sliced bread 200gm", batchNum:1, lastUpdated: "3 months", quantity: 0 },
    { id: 1, name: "sliced bread 200gm", batchNum:1, lastUpdated: "3 months", quantity: 0 },
    { id: 1, name: "sliced bread 200gm", batchNum:1, lastUpdated: "3 months", quantity: 0 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setSkus((prevSkus) =>
      prevSkus.map((sku) =>
        sku.id === id ? { ...sku, quantity: newQuantity } : sku
      )
    );
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/save-skus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skus),
      });

      if (response.ok) {
        alert("Changes saved successfully!");
      } else {
        alert("Failed to save changes.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving changes.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Modern SKU list</h1>
      {skus.map((sku) => (
        <SkuCard
          key={sku.id}
          name={sku.name}
          batchNum={sku.price}
          lastOrdered={sku.lastOrdered}
          //quantity={sku.quantity}
          //onQuantityChange={(newQuantity) => updateQuantity(sku.id, newQuantity)}
        />
      ))}
      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default Menu;
