import { Dispatch, SetStateAction, useEffect, useState } from "react"

const useKudenStorage = (): [string, Dispatch<SetStateAction<string>>] => {
  const [storageValue, setStorageValue] = useState<string>('')
  const key = '@abc-taiko/kuden'

  useEffect(() => {
    setStorageValue(window.localStorage.getItem(key) || '')
  }, [])

  useEffect(() => {
    if (window) window.localStorage.setItem(key, storageValue)
  
  }, [key, storageValue])

  return [storageValue, setStorageValue]
}

export default useKudenStorage
