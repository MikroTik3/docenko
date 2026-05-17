import { educations, links } from '@/constants/data'

import { CardEducation } from '../ui/card-education'

export default function About() {
	return (
		<section className='flex min-h-screen snap-start flex-col items-center justify-start p-8 pt-16 md:pt-28'>
			<div className='w-full max-w-lg space-y-8'>
				<div className='space-y-6 text-left'>
					<div className='flex items-center justify-between'>
						<h1 className='text-foreground font-[family-name:var(--font-monsieur-la-doulaise)]! text-4xl font-medium tracking-tight md:text-5xl'>
							Artur Docenko
						</h1>

						<span className='sr-only'>
							toggle theme
						</span>
					</div>

					<p className='text-foreground font-[family-name:var(--font-roboto-serif)] text-[13px] leading-relaxed antialiased opacity-60 md:text-[15px]'>
						NestJS developer. Hardworking, with strong communication skills. Looking for a company where I can improve my skills and 
                                          grow into a strong technical specialist. Open to new connections :)
					</p>
				</div>

				<div className='flex items-center gap-6'>
					{links.map((link, index) => (
						<a
							key={index}
							href={link.link}
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground border-foreground group flex items-center gap-2 font-medium opacity-40 transition-all hover:opacity-100'
						>
							{link.icon}
						</a>
					))}
				</div>

				<div className='border-foreground/10 space-y-8 border-t pt-8 pb-12'>
					<h2 className='text-foreground font-sans text-xl font-medium tracking-tight md:text-2xl'>
						Education
					</h2>

					<div className='space-y-6'>
						{educations.map((education, index) => (
							<CardEducation
								key={index}
								title={education.title}
								description={
									education.description ??
									''
								}
								date={education.date}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
