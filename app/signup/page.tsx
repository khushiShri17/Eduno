"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <BookOpen className="h-12 w-12 text-blue-500" />
          <h1 className="text-2xl font-bold mt-4">Create your EduVault account</h1>
          <p className="text-muted-foreground mt-2">Join us to access study materials</p>
        </div>

        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>

          <div>
            <Label htmlFor="roll">Roll Number</Label>
            <Input id="roll" type="text" placeholder="Enter your roll number" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="tel" placeholder="Enter your mobile number" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>

          <Button className="w-full">Sign up</Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </Card>
    </div>
  )
}