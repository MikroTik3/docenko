import Link from 'next/link'
import React from 'react'

type CardBlogProps = {
	title: string
	href: string
	date: string
	description?: string
	className?: string
}

export const CardBlog: React.FC<CardBlogProps> = ({
	title,
	href,
	date,
	description = '',
	className = ''
}) => {
	return (
		<Link
			href={href}
			className={`border-foreground/5 block scale-100 border-b py-4 opacity-100 transition-all duration-500 ease-out last:border-0 ${className} `}
		>
			<div className='flex items-baseline justify-between gap-4'>
				<h3 className='text-base leading-tight font-medium md:text-lg'>
					{title}
				</h3>

				<span className='shrink-0 font-mono text-[10px] tracking-widest uppercase opacity-40'>
					{date}
				</span>
			</div>

			{description && (
				<p className='mt-1 text-xs leading-relaxed font-light opacity-40 md:text-sm'>
					{description}
				</p>
			)}
		</Link>
	)
}
