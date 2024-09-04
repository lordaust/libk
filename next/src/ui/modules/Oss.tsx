import { FaqType } from '@/types/types'
import CategoryBadge from '@/ui/modules/CategoryBadge'

type OssDetailsProps = {
	questions: FaqType[]
}

const Oss: React.FC<OssDetailsProps> = ({ questions }) => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
							Kansje du lurer på noe?
						</h2>
						<p className="mt-4 text-base leading-7 text-gray-600">
							Vi har samlet noen av de vanligste spørsmålene vi får, som kanskje
							kan hjelpe. Hvis du ikke finner svaret du leter etter, kan du
							kontakte
							<a
								href="/klubbinfo"
								className="font-semibold text-indigo-600 hover:text-indigo-500"
							>
								&nbsp;oss&nbsp;
							</a>
							direkte.
						</p>
						<p className="mt-4 text-base leading-7 text-gray-600">
							Kanskje finner du ennå flere svar på våre
							<a
								href="/oss"
								className="font-semibold text-indigo-600 hover:text-indigo-500"
							>
								&nbsp;oss/faq&nbsp;
							</a>
							sider.
						</p>
					</div>
					<div className="mt-10 lg:col-span-7 lg:mt-0">
						<dl className="space-y-10">
							{questions.map((question) => (
								<div key={question.question}>
									<dt className="text-base font-semibold leading-7 text-gray-900">
										{question.question}{' '}
										<CategoryBadge category={question.category} />
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{question.answer}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Oss
