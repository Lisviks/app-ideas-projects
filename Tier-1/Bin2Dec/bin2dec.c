#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[])
{
    if (argc < 2)
    {
        printf("Enter binary number\n");
        return 1;
    }

    char* number = argv[1];
    int number_length = strlen(number);

    for (int i = 0; i < number_length; i++)
    {
        // 
        int x = number[i] - '0';
        if (x != 1 && x != 0)
        {
            printf("Enter binary number(1s and 0s)\n");
            return 1;
        }
    }

    int current = 1;
    int decimal = 0;
    for (int i = number_length - 1; i >= 0; i--)
    {
        int x = number[i] - '0';
        if (i == number_length - 1)
        {
            if (x == 1) decimal += current;
            current++;
            continue;
        }
        if (x == 1) decimal += current;
        current *= 2;
    }

    printf("%i\n", decimal);
}