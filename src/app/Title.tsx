"use client";
 
import { Vortex } from "../components/ui/vortex";
import HyperText from "../components/ui/hyper-text";

import React from 'react'

function Title() {
  return (
    <div>
 <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        <HyperText text="Welcome to Sym-MSG"
    />
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        This is a small project demonstrating symmetric encryption by sending secret messages through this platform.        </p>

      </Vortex>
    </div>
    </div>
  )
}

export default Title