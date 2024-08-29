// src/types/types.ts

export type PersonType = {
	name: string
	email: string
	phone: string
	role: string
	boardMember: boolean
	linkedIn: string
	sortorderValue: number
	description: any
	activeState: boolean
	photoUrl: string | null // Directly fetched image URL from the GROQ query
	photo: {
		caption: string
	} | null
}

export type TrainingTimeType = string[]

export type TeamType = {
	teamTitle: string
	teamName: {
		current: string
		_type: 'slug'
	}
	teamCategory: string
	contactPerson: PersonType
	contactPersonType: string
	participationDescription: string
	trainingTimes: TrainingTimeType
	membershipCost: number
	licenseCost: number
	spondCode: string
	teamLink: string
	teamLongDescription: string
	teamDescRichText: any // Assuming it's a rich text field, you might handle this differently
	sortorderValue: number
	activeState: boolean
}
