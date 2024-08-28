import {
	Bars3Icon,
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	ClipboardDocumentListIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline'

const navigation = [
	{ name: 'Hjem', href: '#', icon: HomeIcon, current: true },
	{ name: 'Nyheter', href: './nyheter', icon: UsersIcon, current: false },
	{ name: 'Klubbinfo', href: './klubbinfo', icon: FolderIcon, current: false },
	{
		name: 'Treninger',
		href: './treninger',
		icon: CalendarIcon,
		current: false,
	},
	{
		name: 'Våre lag',
		href: './lag',
		icon: ClipboardDocumentListIcon,
		current: false,
	},
	{
		name: 'Bli medlem',
		href: './medlemskap',
		icon: UserPlusIcon,
		current: false,
	},
	{ name: 'Kontakt', href: './kontakt', icon: ChartPieIcon, current: false },
]

export default navigation
