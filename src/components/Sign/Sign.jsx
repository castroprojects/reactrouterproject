import React from "react";

export default function Sign(){
    return (
        <>

        <div className="bg-gray-100 flex items-center justify-center h-screen">

            
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>

                <form action="#" method="POST">
                    
                    <div className="mb-4">
                        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your username" required />
                    </div>

                    
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email" required />
                    </div>

                    
                    <div className="mb-4">
                        <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your password" required />
                    </div>

                    <div className="mb-6">
                        <label for="confirm_password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                        <input type="password" id="confirm_password" name="confirm_password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Confirm your password" required />
                    </div>

                    
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Sign Up</button>
                    </div>
                </form>

                
                <p className="text-sm text-gray-600 text-center mt-6">Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a></p>
            </div>

        </div>
        
        
        </>
    )
}