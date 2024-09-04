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
	{ name: 'Hjem', href: '/', icon: HomeIcon, current: true },
	{
		name: 'Nyheter',
		href: '/nyheter',
		icon: ClipboardDocumentListIcon,
		current: false,
	},
	{ name: 'Klubbinfo', href: '/klubbinfo', icon: FolderIcon, current: false },
	{
		name: 'Våre lag',
		href: '/lag',
		icon: UsersIcon,
		current: false,
	},
	{
		name: 'FAQ',
		href: '/oss',
		icon: UserPlusIcon,
		current: false,
	},
]

export default navigation
