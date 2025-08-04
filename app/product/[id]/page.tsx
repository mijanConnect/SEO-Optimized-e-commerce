import AddToCartButton from "@/app/components/AddCartButton";
import StarRating from "@/app/components/StarRating";
import { Product } from "@/app/redux/types";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description.slice(0, 150),
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return notFound();
  return (
    <div className="p-6 w-full mx-auto ">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          priority
          className="object-contain bg-white p-8 rounded shadow"
        />
        <div>
          <p className="uppercase text-[14px] text-gray-500">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <div className="flex gap-8">
            <div className="mt-4 text-gray-400 flex gap-2">
              <StarRating rating={product.rating.rate} />({product.rating.rate})
            </div>
            <p className="mt-4 text-green-400">
              {product.rating.count} reviews
            </p>
          </div>
          <p className="mt-4 text-3xl font-normal text-gray-200">
            ${product.price}
          </p>
          <p className="uppercase text-[14px] text-gray-300 mt-4">
            Description
          </p>
          <p className="mt-2 text-gray-400">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
