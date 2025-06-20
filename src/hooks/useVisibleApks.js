// src/hooks/useVisibleApks.js
import { useQuery } from '@tanstack/react-query'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'

async function fetchVisibleApks() {
  const snap = await getDocs(collection(db, 'APK'))
  const all = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  const visible = all
    .filter(a => a.Visible === true && [1,2,3].includes(+a.MainScreenPosition))
    .sort((a,b) => +a.MainScreenPosition - +b.MainScreenPosition)

  // preload images
  visible.forEach(a => {
    if (a.Logo)     new Image().src = a.Logo
    if (a.MainImage) new Image().src = a.MainImage
  })

  return visible
}

export function useVisibleApks() {
  return useQuery({
    queryKey: ['visibleApks'],
    queryFn:  fetchVisibleApks,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
