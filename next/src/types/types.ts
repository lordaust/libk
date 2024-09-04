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

export type FaqType = {
	_id: string
	question: string
	answer: string
	category: string
	order: number
}

export type Attachment = {
	title: string
	description?: string
	_id: string
	fileUrl: string
}

export type BlogCategoryType = {
	_id: string
	title: string
}

export type BlogPostType = {
	_id: string
	title: string // This is the human-readable title
	slug: {
		current: string // This is the slugified version of the title
		_type: string
	}
	body: Array<{
		_key: string
		_type: string
		// Define the types for different possible block types here
		children?: Array<{
			_key: string
			_type: 'span'
			text: string
		}>
		markDefs?: any[]
		style?: string
	}>
	publishDate: string // Date in ISO format
	attachments: Attachment[]
	author: {
		_id: string
		name: string
		role: string
		photo: {
			caption: string
		}
		photoUrl: string
	}
	description: string
	categories: BlogCategoryType[]
}
