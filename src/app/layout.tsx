import type { Metadata, Viewport } from 'next'
import { PropsWithChildren } from 'react'

import {
	geistSans,
	monsieurLaDoulaiseSans,
	robotoSerif
} from '@/constants/font'

import { cn } from '@/lib/utils'

import '@/styles/globals.css'

import { APP_CONFIG, SEO } from '@/constants'

export const viewport: Viewport = {
	themeColor: '#06c1db'
}

export const metadata: Metadata = {
	title: {
		absolute: SEO.name,
		template: `%s - ${SEO.name}`
	},
	description: SEO.description,
	metadataBase: new URL(APP_CONFIG.baseUrl || ''),
	applicationName: SEO.name,
	keywords: SEO.keywords,
	openGraph: {
		title: SEO.name,
		description: SEO.description,
		type: 'website',
		emails: ['dotsenk20034@gmail.com'],
		siteName: SEO.name,
		locale: 'uk_UK',
		images: [
			{
				url: new URL(APP_CONFIG.baseUrl + '/opengraph.png'),
				width: 512,
				height: 512,
				alt: SEO.name
			}
		],
		url: APP_CONFIG.baseUrl
	},
	twitter: {
		card: 'summary_large_image',
		title: SEO.name,
		description: SEO.description,
		images: [
			{
				url: new URL(APP_CONFIG.baseUrl + '/opengraph.png'),
				width: 512,
				height: 512,
				alt: SEO.name
			}
		]
	},
	formatDetection: SEO.formatDetection
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html
			lang='en'
			className={`${cn(geistSans.variable)} ${cn(monsieurLaDoulaiseSans.variable)} ${cn(robotoSerif.variable)} font-sans`}
			suppressHydrationWarning
		>
			<body className='flex min-h-full flex-col'>{children}</body>
		</html>
	)
}

export default RootLayout
