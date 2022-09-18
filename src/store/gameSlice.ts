import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { easyGameConfig } from '~/constants'
import type { GameConfig } from '~/types/game'

const namespace = 'game'

interface GameState {
  gameConfig: GameConfig
}

const initialState: GameState = {
  gameConfig: easyGameConfig,
}

export const gameSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setGameConfig: (state: GameState, action: PayloadAction<GameConfig>) => {
      state.gameConfig = action.payload
    },
  },
})

export const { setGameConfig } = gameSlice.actions