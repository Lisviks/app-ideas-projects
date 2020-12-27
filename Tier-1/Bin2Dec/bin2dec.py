import sys


def bin2dec():
    if len(sys.argv) < 2:
        print('Enter binary number')
        return

    number = sys.argv[1]

    for n in number:
        if int(n) != 1 and int(n) != 0:
            print('Enter binary number(1s and 0s)')
            return

    current = 1
    decimal = 0
    for n in range(len(number) - 1, -1, -1):
        if n == len(number) - 1:
            if int(number[n]) == 1:
                decimal = decimal + current
            current = current + 1
            continue
        if int(number[n]) == 1:
            decimal = decimal + current
        current = current * 2

    print(decimal)


bin2dec()
