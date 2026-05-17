interface CardEducationProps {
	title: string
	description: string
	date: string
}

export function CardEducation({
	title,
	description,
	date
}: CardEducationProps) {
	return (
		<div className='group text-foreground flex flex-col justify-between gap-1 md:flex-row md:items-baseline'>
			<div className='space-y-1'>
				<h3 className='text-sm font-medium transition-colors'>
					{title}
				</h3>
				<p className='text-xs font-light opacity-50'>
					{description}
				</p>
			</div>

			<span className='pt-1 font-mono text-xs tracking-widest uppercase opacity-40 md:pt-0 md:text-sm'>
				{date}
			</span>
		</div>
	)
}
