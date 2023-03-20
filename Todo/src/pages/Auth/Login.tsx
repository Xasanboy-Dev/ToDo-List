import { useEffect, useState } from "react";
import { LoginAuth } from "../../TypeScript/Auth";
export default function Login() {
    let [number, setNumber] = useState("")

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="shadow-lg w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form onSubmit={(e) => e.preventDefault()} className="mt-6">
                    <div className="mb-2">
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            <h1 className="flex">Your phoneNumer</h1>
                        </label>
                        <input
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="+998 XX XXX XX XX"
                            type={"number"}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                    </a>
                    <div className="mt-6">
                        <button onClick={() => LoginAuth(number)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Don't have an account?{" "}
                    <a
                        href="/register"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div >
        </div >
    );
}