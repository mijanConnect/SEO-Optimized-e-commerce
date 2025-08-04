import Image from "next/image";
import Link from "next/link";
import { Product } from "./../redux/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-4 rounded shadow flex flex-col justify-between bg-slate-900">
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain w-full h-48 bg-slate-50 rounded p-6"
        />
        <p className="text-md font-normal mt-2 line-clamp-1 text-gray-300">
          {product.title}
        </p>
      </div>
      <div>
        <p className="text-gray-200 font-bold mt-2">${product.price}</p>
        <Link href={`/product/${product.id}`}>
          <button className="mt-2 px-2 py-2 bg-gray-700 hover:bg-gray-500 transition text-white rounded cursor-pointer w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
