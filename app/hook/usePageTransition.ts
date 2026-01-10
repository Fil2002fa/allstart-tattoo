"use client"

import { useTransitionRouter } from "next-view-transitions"
import { pageAnimation } from "../lib/pageAnimation"
import React from 'react'

export function usePageTransition() {
  
    const router = useTransitionRouter();

    const navigate = (url:string) => {
        router.push(url, {
            onTransitionReady: pageAnimation,
        })
    }
    return { navigate}
}
