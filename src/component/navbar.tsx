import { useState } from 'react';

// import Link from 'next/link';
// import router from 'next/router';
// import { useRouter } from 'next/router';

export default function Navbar() {
  // const router = useRouter();
  const [usage, setUsage] = useState(false);
  const [components, setComponents] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div className="fixed flex justify-center z-10 bottom-0 right-0">
        <div className="navbar bg-gray-900/75 m-2 mt-2 md:mx-2 rounded-lg">
          {/* <div className="navbar-start">
            <Link href="/">
              <div className="btn btn-ghost normal-case text-xl">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={`${router.basePath}/favicon.jpg`} />
                  </div>
                </div>
              </div>
            </Link>
          </div> */}
          <div className="navbar-center">
            <div className="dropdown dropdown-top dropdown-end dropdown-hover">
              <label
                tabIndex={0}
                className="text-gray-100 btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <button onClick={() => setUsage(true)}>Usage</button>
                </li>
                <li>
                  <button onClick={() => setComponents(true)}>
                    Components
                  </button>
                </li>
                <li>
                  <button onClick={() => setSearch(true)}>Search</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          usage
            ? 'fixed z-20 w-screen h-screen flex justify-center items-center'
            : 'hidden'
        }
      >
        <button
          onClick={() => {
            setUsage(false);
          }}
          className="w-screen h-screen"
        ></button>
        <div className="w-10/12 h-5/6 p-3 bg-gray-800 rounded-3xl absolute">
          <iframe
            src="https://www.falstad.com/circuit/directions.html"
            className="w-full h-full bg-gray-800 rounded-3xl"
          />
        </div>
      </div>

      <div
        className={
          components
            ? 'fixed z-20 w-screen h-screen flex justify-center items-center'
            : 'hidden'
        }
      >
        <button
          onClick={() => {
            setComponents(false);
          }}
          className="w-screen h-screen"
        ></button>
        <div className="w-10/12 h-5/6 bg-gray-800 rounded-3xl absolute">
          <iframe
            src="https://khuenguyencreator.com/tong-hop-kien-thuc-ve-dien-tu-co-ban-cho-nguoi-moi-bat-dau/"
            className="w-full h-full bg-gray-800 rounded-3xl"
          />
        </div>
      </div>

      <div
        className={
          search
            ? 'fixed z-20 w-screen h-screen flex justify-center items-center'
            : 'hidden'
        }
      >
        <button
          onClick={() => {
            setSearch(false);
          }}
          className="w-screen h-screen"
        ></button>
        <div className="w-10/12 h-5/6 bg-gray-800 rounded-3xl absolute">
          <iframe
            src="https://google.com"
            className="w-full h-full bg-gray-800 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
