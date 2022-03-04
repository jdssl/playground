int main() {
  char *names[20];// names is an array of size 20 of a pointer to char.
  char (*place)[10];// place is a pointer to an array of size 10 of char.
  int fnOne(long, short);
  int *fnTwo(void);// fn is a function taking void and returing a pointer to int.
  int (*fp)(void);// fp is a pointer to a function taking void and returning int.
  int **ptr;//  The operators are applied in right-to-left order: ptr is a pointer to a pointer to an int.
  return 0;
}
