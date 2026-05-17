import type { ReactNode } from '@tabler/icons-react'

interface Link {
	link: string
	icon: ReactNode
}

export const links: Link[] = [
	{
		link: 'https://github.com/MikroTik3',
		icon: (
			<svg
				className='size-4'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
				<path d='M9 18c-4.51 2-5-2-7-2' />
			</svg>
		)
	},
	{
		link: 'https://www.linkedin.com/in/artur-docenko/',
		icon: (
			<svg
				className='size-4'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
				<rect x='2' y='9' width='4' height='12' />
				<circle cx='4' cy='4' r='2' />
			</svg>
		)
	},
	{
		link: '/cv/resume.pdf',
		icon: (
			<svg
				className='size-4'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.7.7l3.6 3.6A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' />
				<path d='M14 2v5a1 1 0 0 0 1 1h5' />
				<path d='M10 9H8' />
				<path d='M16 13H8' />
				<path d='M16 17H8' />
			</svg>
		)
	},
	{
		link: 'mailto:dotsenk20034@gmail.com',
		icon: (
			<svg
				className='size-4'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
				<rect x='2' y='4' width='20' height='16' rx='2' />
			</svg>
		)
	}
]

interface Education {
	title: string
	description?: string
	date: string
}

export const educations: Education[] = [
	{
		title: 'Dnipro University of Technology',
		description: 'Bachelor’s degree in Software Engineering',
		date: '2025 - 2029'
	}
]

interface Project {
	name: string
	description: string
	date: string
	preview: string
	links: {
		github: string
		live: string
	}
}

export const projects: Project[] = [
	{
		name: 'NestJS Monobank',
		description:
			'A NestJS application that integrates with the Monobank API to provide users with real-time financial data and insights.',
		date: '2025',
		preview: 'https://nestjs-monobank.vercel.app/docs/getting-started/installation',
		links: {
			github: 'https://github.com/MikroTik3/nestjs-monobank',
			live: 'https://nestjs-monobank.vercel.app'
		}
	},
	{
		name: 'Studio Admin',
		description:
			'Backend development on Next.js + shadcn/ui: tables, charts, themes.',
		date: '2025',
		preview: 'https://next-shadcn-dashboard-admin.vercel.app/auth/login',
		links: {
			github: 'https://github.com/MikroTik3/next-shadcn-dashboard-starter',
			live: 'https://next-shadcn-dashboard-admin.vercel.app/auth/login'
		}
	}
]

interface Blog {
	title: string
	link: string
	date: string
}

export const blogs: Blog[] = [
	{
		title: 'Husky, Lint-Staged та Commitlint для Next.js',
		link: 'https://docenko.vercel.app/blog/husky-lint-staged-commitlint-nextjs',
		date: 'Jan 2025'
	},
	{
		title: 'Sending emails via BullMQ: queues made easy',
		link: 'https://docenko.vercel.app/blog/sending-emails-via-bullmq-queues-made-easy',
		date: 'Feb 2026'
	}
]
