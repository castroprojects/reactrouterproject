import React from "react";

export default function Log(){
    return(
    <>
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

                <form action="#" method="POST">
                    
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email" required />
                    </div>

                    
                    <div className="mb-6">
                        <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your password" required />
                    </div>

                    
                    <div className="flex items-center justify-between mb-6">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label for="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Login</button>
                    </div>
                </form>

            
                <p className="text-sm text-gray-600 text-center mt-6">Don't have an account? <a href="#" class="text-blue-600 hover:underline">Register</a></p>
            </div>
        </div>

    
    
    </>
    )
}