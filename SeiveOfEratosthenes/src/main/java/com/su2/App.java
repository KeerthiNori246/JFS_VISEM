package com.su2;

import java.util.*;

public class App 
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter start of range:");
        int start = sc.nextInt();

        System.out.println("Enter end of range:");
        int end = sc.nextInt();

        int[] res = sieve(start, end);

        System.out.println("Prime numbers in the given range:");
        for (int ele : res) {
            System.out.print(ele + " ");
        }
    }

    static int[] sieve(int start, int end) {

        // boolean array till end
        boolean[] prime = new boolean[end + 1];
        Arrays.fill(prime, true);

        if (end >= 0) prime[0] = false;
        if (end >= 1) prime[1] = false;

        // Sieve
        for (int p = 2; p * p <= end; p++) {
            if (prime[p]) {
                for (int i = p * p; i <= end; i += p) {
                    prime[i] = false;
                }
            }
        }

        // Count primes in range
        int count = 0;
        for (int i = Math.max(2, start); i <= end; i++) {
            if (prime[i]) count++;
        }

        // Store result
        int[] res = new int[count];
        int idx = 0;
        for (int i = Math.max(2, start); i <= end; i++) {
            if (prime[i]) {
                res[idx++] = i;
            }
        }

        return res;
    }
}
