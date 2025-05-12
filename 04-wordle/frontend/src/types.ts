export type GameConfig = {
  wordLength: number;
  allowRepeat: boolean;
};

export type GameInfo = {
  id: number;
  config: GameConfig;
  startTime: string;
  endTime: string | null;
};
