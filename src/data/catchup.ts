// Teachers: change a password here. It is shown on purpose in plain text so other teachers can find it.
export const REPO = 'StefanUG/python-asteroids'
export const BRANCH = 'main'

export interface CatchUpEntry {
  password: string
  file: string
  /** The level the file ends with, shown to the learner. */
  level: number
}

export const catchup: Record<number, CatchUpEntry> = {
  2: { password: 'raket', file: '02_move_better.py', level: 2 },
  3: { password: 'komet', file: '06_more_bullets.py', level: 6 },
  4: { password: 'meteor', file: '10_not_invisible_ones.py', level: 10 },
  5: { password: 'galakse', file: '14_respawn_asteroids.py', level: 14 },
  6: { password: 'nebula', file: '17_flash_upon_hit.py', level: 17 },
  7: { password: 'supernova', file: '19_thrust_animation.py', level: 19 },
}
