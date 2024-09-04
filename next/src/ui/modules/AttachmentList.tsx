import React from 'react'
import { Attachment } from '@/types/types'
import {
	FaFilePdf,
	FaFileWord,
	FaFileExcel,
	FaFileImage,
	FaFile,
} from 'react-icons/fa'

type AttachmentListProps = {
	attachments: Attachment[]
}

const getIconForFileType = (filename: string) => {
	const extension = filename.split('.').pop()?.toLowerCase()
	switch (extension) {
		case 'pdf':
			return <FaFilePdf className="text-red-600" />
		case 'doc':
		case 'docx':
			return <FaFileWord className="text-blue-600" />
		case 'xls':
		case 'xlsx':
		case 'csv':
			return <FaFileExcel className="text-green-600" />
		case 'png':
		case 'gif':
		case 'webp':
		case 'jpg':
			return <FaFileImage className="text-yellow-600" />
		default:
			return <FaFile className="text-gray-600" /> // Default for unknown types
	}
}

const AttachmentList: React.FC<AttachmentListProps> = ({ attachments }) => {
	return (
		<div className="mt-6">
			<h2 className="mb-4 text-xl font-bold">Relevante vedlegg</h2>
			<ul className="space-y-4">
				{attachments.map((attachment) => (
					<li key={attachment._id} className="flex items-start space-x-3">
						{/* Icon based on file type */}
						<span className="text-xl">
							{getIconForFileType(attachment.fileUrl)}
						</span>
						<div>
							{/* Attachment Title */}
							<a
								href={attachment.fileUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-blue-600 hover:underline"
							>
								{attachment.title} ({attachment.fileUrl.split('.').pop()})
							</a>
							{/* Description, if available */}
							{attachment.description && (
								<p className="mt-1 text-sm text-gray-500">
									{attachment.description}
								</p>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AttachmentList
