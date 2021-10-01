module Main where
import System.IO (isEOF)

minOnes :: Int -> Int
minOnes 1 = 1
minOnes n = aux 1 11 n
    where
        aux a b c
            | b `mod` c == 1 = a
            | otherwise = aux (a + 1) ((b `mod` c) * 10 + 1) c


main = do 
        done <- isEOF
        if done
            then return ()
            else do num <- getLine
                    print $ minOnes $ read num
                    main