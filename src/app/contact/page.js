"use client";

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Bar, BarChart } from "recharts"





export default function ContactUs() {
    async function SubmitForm(formData) {
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message"),
            name: formData.get("name") 
        };
        console.log(formFields);
        console.log("Form submitted");
        return formFields;  
    }
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
                <form className="space-y-4" action= {SubmitForm} >
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                        <input type="text" id="name" name="name" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input type="email" id="email" name="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 focus:outline-none" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 focus:outline-none"></textarea>
                    </div>
                    {/* <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Submit</button> */}
                                    <div> 
                    <Button>Submit</Button>

                    </div>

                 
                </form>
            </div>
        </main>
    );
}