import { useContext, useState } from 'react'
import './styles.css'
import classNames from 'classnames'
import { Context } from 'store'
import { CHANGE_CATEGORY, CHANGE_WORD_TO_GUESS } from 'store/types'
import wordsArray from 'constants/wordsArray'
import Button from 'components/Button'
import { getCategoryWords, getRandom } from 'utils'

const CategoryMenu = () => {
  const { state, dispatch } = useContext(Context)
  const [selectedRandom, setSelectedRandom] = useState(false)

  const handleRandomClick = () => {
    const random = getRandom(wordsArray.length)
    const category = wordsArray[random].category

    setSelectedRandom(true)

    dispatch({
      type: CHANGE_CATEGORY,
      category,
    })
  }

  const buttons = wordsArray.map((w, index) => {
    const handleClick = () => {
      if (selectedRandom) {
        setSelectedRandom(false)
      }

      dispatch({
        type: CHANGE_CATEGORY,
        category: w.category,
      })
    }

    const buttonClass = classNames(
      'category-button',
      {
        selected: !selectedRandom && state.selectedCategory === w.category,
      }
    )

    return (
      <Button
        className={buttonClass}
        onClick={handleClick}
        key={index}
      >
        {w.category}
      </Button>
    )
  })

  const handleStart = () => {
    const categoryWords = getCategoryWords(state.selectedCategory)
    const random = getRandom(categoryWords.length)
    const wordObj = categoryWords[random]
    const wordLetters = wordObj.word.split('').filter(l => l !== ' ')
    const uniqueLetters = Array.from(new Set(wordLetters))

    dispatch({
      type: CHANGE_WORD_TO_GUESS,
      word: wordObj.id,
      uniqueLetters,
    })
  }

  const randomButtonClass = classNames(
    'category-button',
    {
      selected: selectedRandom,
    }
  )

  return (
    <div className='category-menu'>
      <div className='categories'>
        <Button
          className={randomButtonClass}
          onClick={handleRandomClick}
          key='randomCategoryButton'
        >
          Random category
        </Button>
        {buttons}
      </div>
      <Button
        className='start-button'
        disabled={state.selectedCategory.length === 0}
        onClick={handleStart}
      >
        Start Game
      </Button>
    </div>
  )
}

export default CategoryMenu