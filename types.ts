
export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export enum SlideId {
  Intro = 0,
  GrowthStats = 1,
  TwoEngines = 2,
  PLGIntro = 3,
  ValueJourney = 4,
  SetupMoment = 5,
  AhaMoment = 6,
  HabitMoment = 7,
  ConversionStats = 8,
  CLGIntro = 9,
  EvangelistsFunnel = 10,
  CommunityImpact = 11,
  Flywheel = 12,
  Principles = 13
}
