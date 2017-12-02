#!/bin/bash

PARTONE=0
PARTTWO=0

while read -r line; do
  IFS=' ' read -r -a array <<< "$(echo "${line}" | tr '\t' '\n' | sort -n | paste -s -d ' ' -)"
  LEN=${#array[*]}
  MIN="${array[0]}"
  MAX="${array[$LEN-1]}"
  ((PARTONE += (MAX-MIN)))
  MED=0 # This variable will let us break out of the loops when a match is found
  for m in `seq 0  $((LEN-2))`; do
    for n in `seq $((m+1))  $((LEN-1))`; do
      M=${array[$m]}
      N=${array[$n]}
      if [ "$(expr $N % $M)" = "0" ]; then
        ((PARTTWO += (N / M)))
        MED=1
        break
      fi
    done
    if [ $MED -eq 1 ]; then break; fi
  done
done < input

echo "Part 1 Solution: $PARTONE"
echo "Part 2 Solution: $PARTTWO"
