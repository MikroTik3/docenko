'use client'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'

import About from '@/components/home/about'
import Blog from '@/components/home/blog'
import Contact from '@/components/home/contact'
import Projects from '@/components/home/projects'

export default function HomePage() {
	return (
		<SimpleBar
			style={{ maxHeight: '100vh' }}
			scrollableNodeProps={{
				className: 'snap-y snap-mandatory scroll-smooth'
			}}
		>
			<About />
			<Projects />
			<Blog />
			<Contact />
		</SimpleBar>
	)
}
