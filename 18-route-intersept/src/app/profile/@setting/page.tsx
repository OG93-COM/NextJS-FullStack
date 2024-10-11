import CardProfile from '@/app/components/CardProfile'
import Link from 'next/link'
import React from 'react'

export default function Setting() {
  return (
    <CardProfile>
        Setting Component
        <Link href={"/profile/archived"}>Archive</Link>
    </CardProfile>
  )
}
