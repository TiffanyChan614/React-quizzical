import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { scoreCollection } from './firebase'

export async function fetchScoresByCategory(category) {
  console.log('scoreCollection', scoreCollection)
  console.log('category', category)

  const scoresQuery = query(
    scoreCollection,
    orderBy('score.weightedScore', 'desc'),
    where('score.category', '==', category)
  )
  console.log('scoresQuery', scoresQuery)

  const querySnapshot = await getDocs(scoresQuery)
  const scores = []
  querySnapshot.docs.map((doc, index) => {
    const {
      name,
      score: { weightedScore },
    } = doc.data()
    const rank = index + 1
    scores.push({ id: doc.id, name, weightedScore, rank })
  })

  return scores
}
