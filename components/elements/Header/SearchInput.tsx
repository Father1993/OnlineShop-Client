import { useState } from 'react'
import { $mode } from '@/context/mode'
import { useStore } from 'effector-react'
import Select from 'react-select'
import { SelectOptionType } from '@/types/common'

const SearchInput = () => {
  const mode = useStore($mode)

  const [searchOption, setSearchOption] = useState<SelectOptionType>(null)

  const handleSearchOptionChange = (selectedOption: SelectOptionType) => {
    setSearchOption(selectedOption)
  }

  return (
    <Select
      placeholder="Я ищу..."
      value={searchOption}
      onChange={handleSearchOptionChange}
      isClearable={true}
      openMenuOnClick={false}
      options={[1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15].map((item) => ({
        value: item,
        label: item,
      }))}
    />
  )
}

export default SearchInput
