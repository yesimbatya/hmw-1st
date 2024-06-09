import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex items-center justify-center bg-whitesmoke">
            <header className="text-black body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                            />
                        </svg>
                        <span className="ml-3 text-xl text-black">Loomis</span>
                    </Link>
                    <nav className="md:ml-auto md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center text-center">
                        <Link href="/" className="mr-5 hover:text-gray-400 cursor-pointer">
                            Sweet Home
                        </Link>
                        <Link href="/blog" className="mr-5 hover:text-gray-400 cursor-pointer">
                            Main App
                        </Link>
                        <Link href="/about" className="mr-5 hover:text-gray-400 cursor-pointer">
                            About Me
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}
