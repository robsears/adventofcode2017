#include<stdio.h>
#include<string.h>

int partOne(char input[]);
int partTwo(char input[]);
int numberCruncher(char input[], int step);

int main(int argc, char* argv[]) {

  // Exit if no input string was provided
  if (argc == 1) {
    printf("Must specify an input on the command line.\n");
    return(0);
  }

  // Read the input string into a char array
  char input[strlen(argv[1])];
  memcpy(input, argv[1], strlen(argv[1])+1);

  // Print the answers:
  printf("Part 1 Solution: %d\n", partOne(input));
  printf("Part 2 Solution: %d\n", partTwo(input));

  return 0;
}

// Part 1: use a step of 1 when comparing numbers
int partOne(char input[]) {
  return numberCruncher(input, 1);
}

// Part 2: use a step of R/2 when comparing numbers
int partTwo(char input[]) {
  return numberCruncher(input, strlen(input) / 2);
}

// Compare numbers and update a running summation when they match
int numberCruncher(char input[], int step) {
  int q = 0;
  for (int i=0; i<strlen(input); i++) {
    int j = (i+step) % strlen(input);
    int x = input[i] - '0';
    int y = input[j] - '0';
    if (x == y) {
      q += x;
    }
  }
  return q;
}
