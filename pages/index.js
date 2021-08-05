import Head from "next/head";
import Header from "../components/Header";

import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg text-gray-700">new doc</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <div className="relative w-40 border-2 cursor-pointer h-52 hover:border-blue-700">
              <Image layout="fill" src="https://links.papareact.com/pju" />
            </div>
            <p className="mt-2 ml-2 text-sm font-semibold text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 bg-white md:px-0">
        <div className="max-w-3xl py-8 mx-auto">
          <div className="flex items-center justify-between pb-5">
            <h2 className="flex-grow font-medium">My documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
