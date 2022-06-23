import { useState } from "react";
import "./index.css";

import { AddCategory, GifGrid } from "./components/";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat ]);
  };

  return (
    <>
      <div className="bg-zinc-100">
        <div className="text-3xl font-semibold mb-4 bg-sky-800 px-2 py-3 text-white">GiftExpertApp</div>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        {
          categories.length === 0 ? <div className="text-center font-semibold p-4 text-slate-400">No ha agregado categorías</div> :
            categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))
        }
      </div>
    </>
  );
};
