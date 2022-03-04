#include <stdint.h>

int main() {
  uint32_t u32 = 32;
  uint8_t u8 = 255;
  int64_t i64 = -65;

  signed char c = 127;
  signed short int si = 32767;
  signed int i = 32767;
  signed long int li = 2147483647;
  signed long long int lin = 2147483647;

  /*
   * each of these signed integer types has an usigned version
   * unsigned int i = 65535;
   * unsigned short = 2767;
   * unsigned char = 255;
   */

  return 0;
}
