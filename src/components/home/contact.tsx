'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
	const [copied, setCopied] = useState(false)

	const email = 'dotsenk20034@gmail.com'

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setCopied(true)

			setTimeout(() => {
				setCopied(false)
			}, 1500)
		} catch (err) {
			console.error('Copy failed:', err)
		}
	}

	return (
		<motion.footer
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.9, ease: 'easeOut' }}
			className='relative flex min-h-screen snap-start flex-col items-center justify-between overflow-hidden p-8 pt-20 pb-10 text-center'
		>
			<div />

			<div className='space-y-4'>
				<div className='space-y-4 text-center'>
					<h2 className='from-foreground/40 to-foreground bg-gradient-to-b bg-clip-text pb-2 text-4xl font-medium tracking-tighter text-transparent md:text-6xl'>
						Let's build.
					</h2>

					<p className='text-foreground mx-auto max-w-sm text-sm font-light md:text-lg'>
						Currently available for select freelance
						opportunities and collaborative internal
						systems.
					</p>
				</div>

				<button
					onClick={handleCopy}
					className='group border-foreground text-foreground mx-auto flex cursor-pointer items-center gap-4 border-b-2 pb-2 text-xl font-medium transition-all duration-300 focus:outline-none md:text-2xl'
				>
					<span>{email}</span>

					<div className='relative h-5 w-5'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
								copied
									? 'scale-50 opacity-0'
									: 'scale-100 opacity-40 group-hover:opacity-100'
							}`}
						>
							<rect
								width='14'
								height='14'
								x='8'
								y='8'
								rx='2'
								ry='2'
							/>
							<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
						</svg>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
								copied
									? 'scale-100 opacity-100'
									: 'scale-50 opacity-0'
							}`}
						>
							<path d='M20 6 9 17l-5-5' />
						</svg>
					</div>
				</button>
			</div>

			<div className='border-foreground flex w-full max-w-lg flex-col items-center justify-between gap-8 border-t pt-20 md:flex-row'>
				<div className='text-foreground text-left text-[10px] font-medium tracking-widest uppercase'>
					@ 2026 Artur Docenko <br />
					All right reserved.
				</div>

				<button className='text-foreground group flex cursor-pointer items-center gap-3 text-[10px] font-medium tracking-widest uppercase transition-all duration-300 ease-in-out'>
					Back to Top
					<div className='border-foreground group-hover:bg-foreground group-hover:text-background flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ease-in-out'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-arrow-up h-3.5 w-3.5 transition-transform duration-300 ease-in-out'
							aria-hidden='true'
						>
							<path d='m5 12 7-7 7 7'></path>
							<path d='M12 19V5'></path>
						</svg>
					</div>
				</button>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 1.2,
					ease: 'easeOut',
					delay: 0.2
				}}
				className='pointer-events-none absolute bottom-0 left-0 h-[45vh] w-full bg-gradient-to-t from-cyan-500/40 via-sky-500/15 to-transparent blur-3xl'
			/>
		</motion.footer>
	)
}
