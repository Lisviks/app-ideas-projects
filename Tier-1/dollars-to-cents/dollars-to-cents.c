#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(int argc, char* argv[])
{
    if (argc < 2)
    {
        printf("Enter dollar amount as an argument");
    }

    float dollars = atof(argv[1]);

    int cents = dollars * 100;
    int quarters = floor(cents / 25);
    int dimes = floor((cents - quarters * 25) / 10);
    int nickels = floor((cents - quarters * 25 - dimes * 10) / 5);
    int pennies = floor(cents - quarters * 25 - dimes * 10 - nickels * 5);

    printf("Quarters: %i\n", quarters);
    printf("Dimes: %i\n", dimes);
    printf("Nickels: %i\n", nickels);
    printf("Pennies: %i\n", pennies);
}
