'use client'

import { LinkPreview } from './link-preview'

interface Links {
	live: string
	github: string
}

interface CardProjectProps {
	name: string
	description: string
	date: string
	preview: string
	links?: Links
}

export function CardProject({
	name,
	description,
	date,
	preview,
	links
}: CardProjectProps) {
	return (
		<div className='relative block space-y-2'>
			<div className='flex items-baseline justify-between'>
				<h3 className='text-lg font-medium'>{name}</h3>
				<span className='font-mono text-xs opacity-40'>
					{date}
				</span>
			</div>

			<LinkPreview url={preview}>
				<p className='text-sm leading-relaxed font-light opacity-60'>
					{description}
				</p>
			</LinkPreview>

			<div className='flex items-center gap-6 pt-1'>
				<a
					key={links?.live}
					href={links?.live ?? ''}
					target='_blank'
					rel='noopener noreferrer'
					className='text-[10px] tracking-widest uppercase opacity-40 transition-opacity hover:opacity-100'
				>
					Live
				</a>

				<a
					key={links?.github}
					href={links?.github ?? ''}
					target='_blank'
					rel='noopener noreferrer'
					className='text-[10px] tracking-widest uppercase opacity-40 transition-opacity hover:opacity-100'
				>
					Source
				</a>
			</div>
		</div>
	)
}
