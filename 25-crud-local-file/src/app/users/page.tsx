"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { User } from '../types/types'
export default function PageUser() {
  
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null)

  return (
    <div>
      
    </div>
  )
}
