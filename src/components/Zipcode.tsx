import { useState } from 'react'
import { useGetSuggestions } from 'hooks/useGetSuggestions'
import { ZipcodeInfoProps } from 'helpers/Interfaces'

const Zipcode = () => {
	const [query, setQuery] = useState<string>('')
	const [activeZipCode, setActiveZipcode] = useState<ZipcodeInfoProps | null>(null)
	const suggestions = useGetSuggestions(query)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		activeZipCode && setActiveZipcode(null)
		const input = event.target.value
		if (/^[0-9]{0,5}$/.test(input)) {
			setQuery(input)
		}
	}

	const handleClick = (suggestion: ZipcodeInfoProps) => {
		setQuery('')
		setActiveZipcode(suggestion)
	}

	return (
		<div className='zipcode'>
			<input className='zipcode-input' type='text' placeholder='Enter Zipcode' value={query || activeZipCode?.zip_code} onChange={handleChange} />
			{suggestions?.length > 0 && (
				<div className='suggestions-list'>
					{suggestions?.map((suggestion) => (
						<p key={suggestion?.zip_code} className='suggestion' onClick={() => handleClick(suggestion)}>
							{suggestion?.zip_code}
						</p>
					))}
				</div>
			)}
			{activeZipCode?.zip_code && <p className='zipcode-info'>{`${activeZipCode?.zip_code} - ${activeZipCode?.city}, ${activeZipCode?.state}`}</p>}
		</div>
	)
}

export default Zipcode
