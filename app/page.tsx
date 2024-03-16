import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js for internal links

export default function Home() {


  return (
    <>
      <Head>
        <title>Lee Pettigrew - X20730039</title>
        <meta name="description" content="App To Showcase Pipeline" />
      </Head>

      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Welcome to Lee Pettigrew&apos;s simple application to showcase a code Pipeline
          </h1>
          <p className="mt-4 text-xl">
            Uses Next.js and Tailwind CSS. Currently the best app ever made, but it works for this demonstration.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center">
          Features
        </h2>
        <div className="flex flex-wrap mt-10 -mx-3">
          <div className="w-full md:w-1/3 px-3 mb-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Imagine something good here</h3>
              <p className="text-gray-600">
                This is where I would talk about how good the things are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Repository Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-6">
          GitHub Repository & Recent Changes
        </h2>
        <div className="text-center">
          <p className="mb-4">Take a look at the source code and recent updates to this application:</p>
          {/* Link to GitHub repository */}
          <Link href="https://github.com/leePettigrew/my-nextjs-app" className="text-blue-500 hover:text-blue-700 font-bold">
            View GitHub Repository
          </Link>
        </div>
      </div>


      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; {new Date().getFullYear()} Lee Pettigrew - X20730039</p>
            </div>
            <div>
              {/* Social icons can go here */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
