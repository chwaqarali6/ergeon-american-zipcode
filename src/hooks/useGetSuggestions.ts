import { useMemo } from 'react'
import USAZipcodes from 'helpers/USAZipcodes.json'
import { ZipcodeInfoProps } from 'helpers/Interfaces'

export const useGetSuggestions = (query: string): Array<ZipcodeInfoProps> => {
	const allZipcodes = useMemo(() => {
		return USAZipcodes?.map((data) => ({ ...data, zip_code: String(data.zip_code).padStart(5, '0') }))
	}, [])

	const suggestions = useMemo(() => {
		return allZipcodes.filter((zipcodeData) => query && zipcodeData.zip_code.startsWith(query))
	}, [query, allZipcodes])

	return suggestions
}
