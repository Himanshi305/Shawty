import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="relative top-20">
        <section className="bg-black grid grid-cols-2 h-90">
          <div className="flex flex-col gap-4 justify-center items-center rounded-4xl">
            <p className="text-4xl font-bold">
              The best URL shortener in the market
            </p>
            <p>we are the most straight forward in the market</p>
            <div className="flex justify-center gap-5">
              <Link href="/shorten" className="bg-white text-black font-semibold rounded-2xl p-2">
                <button>Try now</button>
              </Link>
              <Link href="/github" className="bg-white text-black font-semibold rounded-2xl p-2">
                <button>Github</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-start relative">
            <Image
              alt="An image of vector"
              src={"/vector.png"}
              fill={true}
            ></Image>
          </div>
        </section>
      </main>
    </div>
  );
}
