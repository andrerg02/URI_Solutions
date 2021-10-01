module Main where
import System.IO (isEOF)

stacks :: Int -> Int -> Int
stacks 1 1 = 1
stacks m n
        | m == 0 = n
        | n == 0 = m
        | m == 1 || n == 1 = 1
        | m > n = stacks (m - n) n
        | otherwise = stacks m (n - m)

main =  do tests <- getLine
           loop (read tests)
                where
                        loop t
                                | t == 0 = return () 
                                | otherwise = do (f1 : f2 : _) <- fmap words getLine
                                                 print $ stacks (read f1) (read f2)
                                                 loop (t - 1)


