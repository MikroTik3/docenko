import { projects } from '@/constants/data'

import { CardProject } from '../ui/card-project'

export default function Projects() {
	return (
		<section className='flex min-h-screen snap-start flex-col items-center justify-center p-8'>
			<div className='w-full max-w-lg space-y-12'>
				<h2 className='text-foreground text-xl font-medium tracking-tight md:text-2xl'>
					Projects
				</h2>

				<div className='space-y-10'>
					{projects.map((project, index) => (
						<CardProject
							key={index}
							name={project.name}
							description={project.description}
							date={project.date}
							preview={project.preview}
							links={project.links}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
