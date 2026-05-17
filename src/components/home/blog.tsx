import { blogs } from '@/constants/data'

import { CardBlog } from '../ui/card-blog'

export default function Blog() {
	return (
		<section className='flex min-h-screen snap-start flex-col items-center justify-center p-8'>
			<div className='w-full max-w-lg space-y-10'>
				<h2 className='text-foreground text-xl font-medium tracking-tight md:text-2xl'>
					Writing
				</h2>

				<div className='group/list space-y-2'>
					{blogs.map((blog, index) => (
						<CardBlog
							key={index}
							title={blog.title}
							href={blog.link}
							date={blog.date}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
