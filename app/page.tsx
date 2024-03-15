import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        {/* Head component for SEO and linking to stylesheets, currently not in use and wont be for this app */}
        <title>My Next.js App</title>
        <meta name="description" content="A stunning homepage built with Next.js and Tailwind CSS" />
      </Head>

      {/* Hero section */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Welcome to Lee Pettigrews simple application to showcase a code Pipeline
          </h1>
          <p className="mt-4 text-xl">
            Uses nextJS and tailcss, Currently not the most impressive app, but it works for this demonstration.
          </p>
        </div>
      </div>

      {/* Featurettes section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center">
          Features
        </h2>
        <div className="flex flex-wrap mt-10 -mx-3">
          {/* Single featurette */}
          <div className="w-full md:w-1/3 px-3 mb-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Imagine something good here</h3>
              <p className="text-gray-600">
                This is where i would talk about how good the things are
              </p>
            </div>
          </div>
          {/* Repeat the above div block for each featurette you want to showcase */}
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; {new Date().getFullYear()} Lee Pettigrew - X20730039</p>
            </div>
            <div>
              {/* Social ions can go here */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
