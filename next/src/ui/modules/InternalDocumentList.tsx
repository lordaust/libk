import React from 'react'
import { InternalDocument } from '@/types/types'
import { format } from 'date-fns'
import { nb } from 'date-fns/locale'
import {
	FaFilePdf,
	FaFileWord,
	FaFileExcel,
	FaFileImage,
	FaFileCode,
	FaFile,
	FaExternalLinkAlt,
	FaDownload,
} from 'react-icons/fa'

type InternalDocumentListProps = {
	documents: InternalDocument[]
	emptyMessage?: string
}

function getFileType(doc: InternalDocument): string {
	if (doc.fileType) return doc.fileType.toLowerCase()
	if (doc.isExternal) return 'link'
	return doc.fileUrl.split('.').pop()?.toLowerCase() ?? 'fil'
}

function getIconForType(type: string) {
	switch (type) {
		case 'pdf':
			return <FaFilePdf className="h-5 w-5 text-brand-600" />
		case 'doc':
		case 'docx':
			return <FaFileWord className="h-5 w-5 text-royal-600" />
		case 'xls':
		case 'xlsx':
		case 'csv':
			return <FaFileExcel className="h-5 w-5 text-green-600" />
		case 'png':
		case 'jpg':
		case 'jpeg':
		case 'gif':
		case 'webp':
			return <FaFileImage className="h-5 w-5 text-amber-500" />
		case 'svg':
			return <FaFileCode className="h-5 w-5 text-purple-600" />
		case 'link':
			return <FaExternalLinkAlt className="h-5 w-5 text-royal-600" />
		default:
			return <FaFile className="h-5 w-5 text-navy-400" />
	}
}

const InternalDocumentList: React.FC<InternalDocumentListProps> = ({
	documents,
	emptyMessage = 'Ingen dokumenter er lagt til ennå.',
}) => {
	if (!documents || documents.length === 0) {
		return (
			<div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50/40 px-6 py-12 text-center text-navy-500">
				{emptyMessage}
			</div>
		)
	}

	return (
		<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{documents.map((doc) => {
				const type = getFileType(doc)
				const isExternal = doc.isExternal || type === 'link'

				return (
					<li key={doc._id}>
						<a
							href={doc.fileUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-hover"
						>
							<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 ring-1 ring-inset ring-navy-100">
								{getIconForType(type)}
							</span>

							<div className="min-w-0 flex-1">
								<div className="flex items-start justify-between gap-2">
									<h3 className="font-display text-lg font-semibold uppercase tracking-tight text-navy-900 group-hover:text-royal">
										{doc.title}
									</h3>
									<span
										className="shrink-0 text-navy-300 transition-colors group-hover:text-royal"
										aria-hidden="true"
									>
										{isExternal ? (
											<FaExternalLinkAlt className="h-3.5 w-3.5" />
										) : (
											<FaDownload className="h-3.5 w-3.5" />
										)}
									</span>
								</div>

								{doc.description && (
									<p className="mt-1 text-pretty text-sm leading-relaxed text-navy-600">
										{doc.description}
									</p>
								)}

								<div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
									<span className="inline-flex items-center rounded-full bg-royal-50 px-2 py-0.5 font-semibold uppercase tracking-wide text-royal-700">
										{isExternal ? 'Ekstern lenke' : type}
									</span>
									{doc.publishedAt && (
										<span className="text-navy-400">
											{format(new Date(doc.publishedAt), 'd. MMM yyyy', {
												locale: nb,
											})}
										</span>
									)}
								</div>
							</div>
						</a>
					</li>
				)
			})}
		</ul>
	)
}

export default InternalDocumentList
