import CustomCounter from '~/components/CustomCounter'
import { mediumGameConfig } from '~/constants'
import { closeModal, openModal, setGameConfig, setModalContent } from '~/store'
import type { GameConfig } from '~/types/game'

const CustomPage = () => {
  const gameStore = useSelector(store => store.persist.game)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const slotNumRef = useRef<any>(null)
  const composedNumRef = useRef<any>(null)
  const levelNumRef = useRef<any>(null)
  const randomRowNumRef = useRef<any> (null)
  const randomColNumRef = useRef<any>(null)
  const blockNumPerLevelRef = useRef<any>(null)

  const startGame = useMemoizedFn(() => {
    dispatch(closeModal())
    navigate('/game')
  })

  const openSuccessModal = () => {
    dispatch(setModalContent(
      <div flex flex-col justify-center items-center>
        <div my-3 text-teal-9>{t('custom.submitSuccess')}</div>
        <button flex items-center gap-2 className="btn" onClick={startGame}>
          <div>{t('custom.startGame')}</div>
          <div i-carbon-game-console></div>
        </button>
      </div>,
    ))
    dispatch(openModal())
  }

  const submitParams = useMemoizedFn(() => {
    const slotNum = slotNumRef.current.getCount()
    const composedNum = composedNumRef.current.getCount()
    const levelNum = levelNumRef.current.getCount()
    const randomRowNum = randomRowNumRef.current.getCount()
    const randomColNum = randomColNumRef.current.getCount()
    const blockNumPerLevel = blockNumPerLevelRef.current.getCount()

    const newGameConfig: GameConfig = {
      slotNum,
      composedNum,
      blockNumPerLevel,
      levelNum,
      randomBlocks: new Array(randomRowNum).fill(randomColNum),
    }
    dispatch(setGameConfig(newGameConfig))
    openSuccessModal()
  })

  const resetParams = useMemoizedFn(() => {
    dispatch(setGameConfig(mediumGameConfig))
    openSuccessModal()
  })

  return (
    <div flex flex-col gap-3 justify-center>
      <div flex flex-col justify-center items-center w-300px mx-auto gap-4 border-teal-6 p-4 border-2 rounded text-teal-8 dark:text-teal-2>
        <h3 font-extrabold>{t('custom.basicParams')}</h3>
        <CustomCounter initialCount={gameStore.gameConfig.composedNum} title={t('custom.composedNum')} ref={composedNumRef} />
      </div>
      <div flex flex-col justify-center items-center w-300px mx-auto gap-4 border-teal-6 p-4 border-2 rounded text-teal-8 dark:text-teal-2>
        <h3 font-extrabold>{t('custom.levelArea')}</h3>
        <CustomCounter initialCount={gameStore.gameConfig.blockNumPerLevel} title={t('custom.blockNumPerLevel')} ref={blockNumPerLevelRef} />
        <CustomCounter initialCount={gameStore.gameConfig.levelNum} title={t('custom.levelNum')} ref={levelNumRef} />
      </div>
      <div flex flex-col justify-center items-center w-300px mx-auto gap-4 border-teal-6 p-4 border-2 rounded text-teal-8 dark:text-teal-2>
        <h3 font-extrabold>{t('custom.randomArea')}</h3>
        <CustomCounter initialCount={gameStore.gameConfig.randomBlocks.length} title={t('custom.randomAreaRowNum')} ref={randomRowNumRef} />
        <CustomCounter initialCount={gameStore.gameConfig.randomBlocks[0] || 0} title={t('custom.randomAreaColNum')} ref={randomColNumRef} />
      </div>
      <div flex flex-col justify-center items-center w-300px mx-auto gap-4 border-teal-6 p-4 border-2 rounded text-teal-8 dark:text-teal-2>
        <h3 font-extrabold>{t('custom.slotArea')}</h3>
        <CustomCounter initialCount={gameStore.gameConfig.slotNum} title={t('custom.slotNum')} ref={slotNumRef} />
      </div>
      <div flex items-center justify-center gap-3>
        <button onClick={submitParams} className="btn w-100px">
          {t('custom.submit')}
        </button>
        <button onClick={resetParams} className="btn w-100px">
          {t('custom.reset')}
        </button>
      </div>
    </div>
  )
}

export default CustomPage
