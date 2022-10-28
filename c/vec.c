#include <stdio.h>

struct Vector {
  int x;
  int y;
  int z;
};

void incX(struct Vector *v);

int main() {
  struct Vector v1 = {1, 2, 3};

  printf("Before: v1.x = %d\n", v1.x);

  incX(&v1);

  printf("After: v1.x = %d\n", v1.x);

  return 0;
}

void incX(struct Vector *v) {
  v->x++;
}
