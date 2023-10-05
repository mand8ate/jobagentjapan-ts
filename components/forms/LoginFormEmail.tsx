"use client"

export default function LoginFormEmail() {
    const formActionUrl = `${location.origin}/api/auth/signin`

    return (
        <div>
            <form action={formActionUrl} method="POST">
                <div className="mb-2">
                    <input 
                        type="email"
                        name="email" 
                        required
                        className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent" 
                        placeholder="Email Address"
                    />
                </div>
                <div className="mb-2">
                    <input 
                        type="password"
                        name="password"
                        required 
                        className="appearance-none rounded-full py-2 px-4 text-gray-700 bg-silver-100 w-full focus:outline-none focus:ring-1 focus:ring-palevioletred-200 focus:border-transparent" 
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        className="w-full bg-palevioletred-100 hover:bg-palevioletred-500 text-white font-medium py-2 px-4 rounded-full transition duration-200 ease-in-out"
                    >
                        Email Signin
                    </button>
                </div>
            </form>
        </div>
    )
}
