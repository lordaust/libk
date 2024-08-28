import { Person } from './PersonType'

type Team = {
	teamTitle: string
	teamDescriptionRichText: any // Assuming it's a rich text field, you might handle this differently
	teamName: string
	contactPerson: Person
	contactPersonType: string
	participationDescription: string
	trainingTimes: TrainingTime[]
	membershipCost: number
	licenseCost: number
	spondCode: string
	teamLink: string
	teamLongDescription: string
	sortorderValue: number
	activeState: boolean
}
