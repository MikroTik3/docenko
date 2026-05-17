import { Geist, Monsieur_La_Doulaise, Roboto_Serif } from 'next/font/google'

export const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const monsieurLaDoulaiseSans = Monsieur_La_Doulaise({
	weight: '400',
	variable: '--font-monsieur-la-doulaise',
	subsets: ['latin']
})

export const robotoSerif = Roboto_Serif({
	variable: '--font-roboto-serif',
	subsets: ['latin']
})
