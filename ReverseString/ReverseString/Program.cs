using System;
using System.Text;
using System.Diagnostics;

namespace JobInterviewTests
{
    public class Program
    {
        delegate string StringDelegate(string s);
        
        /// <summary>
        /// Main method
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {

            try
            {
                DisplayReversedString("MyString");

                // Test which method used to reverse a string is the fastest one
                TestBenchmark();
            }
            catch (Exception ex)
            {
                // Logging here
                Console.WriteLine(ex.ToString());
            }

            // Wait for user input before closing the application
            Console.ReadKey();
        }

        static private void DisplayReversedString (string inputString) {
            Console.WriteLine(inputString.Reverse());
        }

        private static void Benchmark(string description, StringDelegate d, int times, string text)
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            for (int j = 0; j < times; j++)
            {
                d(text);
            }
            sw.Stop();
            Console.WriteLine("{0} Ticks {1} : called {2} times.", sw.ElapsedTicks, description, times);
        }
        
        private static void TestBenchmark()
        {

            int[] lengths = new int[] { 1, 2, 3, 4, 5, 10, 20, 50, 100, 1000 };

            foreach (int l in lengths)
            {
                int iterations = 10000;
                string text = StringHelper.StringOfLength(l);
                Benchmark(String.Format("Array.Reverse (Length: {0})", l), StringHelper.ReverseStringArray, iterations, text);
                Benchmark(String.Format("Xor (Length: {0})", l), StringHelper.ReverseStringXor, iterations, text);
                Benchmark(String.Format("String Builder (Length: {0})", l), StringHelper.ReverseStringSB, iterations, text);
                Benchmark(String.Format("IEnumerable Char (Length: {0})", l), StringHelper.ReverseStringIEnumerableChar, iterations, text);
                Benchmark(String.Format("Recursive (Length: {0})", l), StringHelper.ReverseStringRecursive, iterations, text);
                Console.WriteLine();
            }
        }

    }

    /// <summary>
    /// This class add Extension Methods to the System.String Object
    /// </summary>
    public static class StringExtension
    {
        /// <summary>
        /// Reverse the input string
        /// <example>
        /// (i.e. "MyString" will become "gnirtSyM")
        /// </example>
        /// <remarks>This is an Extension Method</remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>The reversed string</returns>
        public static string Reverse(this string inputString)
        {
            return StringHelper.ReverseStringRecursive(inputString);
        }

        
    }

    /// <summary>
    /// This class defines static Methods to manipulate the System.String object
    /// </summary>
    public static class StringHelper
    {
        /// <summary>
        /// Reverse the input string
        /// <remarks>
        /// (this method calls itself in a recursive way) 
        /// </remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>Last character of the string concatenated with the result of the call to same method with the remaining input string (minus the last character)</returns>
        public static string ReverseStringRecursive(string inputString)
        {
            if (String.IsNullOrEmpty(inputString))
            {
                return String.Empty;
            }

            string outputString = inputString;
            // If the input string has more than one character, extract the last character and concatenate it to the result of the recursive call of the method
            // Otherwise return the remaining character (which is the very first character of the original input string)
            if (inputString.Length >= 1)
            {
                string lastChar = inputString.Substring(inputString.Length - 1);
                string remainingStringToReverse = inputString.Substring(0, inputString.Length - 1);
                outputString = String.Format("{0}{1}", lastChar, ReverseStringRecursive(remainingStringToReverse));
            }
            return outputString;
        }

        /// <summary>
        /// Reverse the input string
        /// <remarks>
        /// (this method uses the Xor operator)
        /// Performs a three times Xor operation on two arrays of bytes will interchange both of them.
        /// x1 = 0110, x2 = 0010
        /// First time:  x1 = x1 XOR x2 = 0110 XOR 0010 = 0100
        /// Second time: x2 = x1 XOR x2 = 0100 XOR 0010 = 0110 (so x2 is now reversed, meaning equals to the original x1)
        /// Third time:  x1 = x1 XOR x2 = 0100 XOR 0110 = 0010 (so x1 is now reversed, meaning equals to the original x2)
        /// </remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>The reversed string</returns>
        public static string ReverseStringXor(string s)
        {
            if (s == null) { return String.Empty; }
            char[] charArray = s.ToCharArray();
            int len = s.Length - 1;

            for (int i = 0; i < len; i++, len--)
            {
                charArray[i] ^= charArray[len];
                charArray[len] ^= charArray[i];
                charArray[i] ^= charArray[len];
            }

            return new string(charArray);
        }

        /// <summary>
        /// Reverse the input string
        /// <remarks>
        /// (this method uses the StringBuilder object) 
        /// </remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>The reversed string</returns>
        public static string ReverseStringSB(string text)
        {
            if (text == null) { return String.Empty; }
            StringBuilder builder = new StringBuilder(text.Length);
            for (int i = text.Length - 1; i >= 0; i--)
            {
                builder.Append(text[i]);
            }
            return builder.ToString();
        }

        /// <summary>
        /// Reverse the input string
        /// <remarks>
        /// (this method uses the IEnumerable implementation of the String Object) 
        /// </remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>The reversed string</returns>
        public static string ReverseStringIEnumerableChar(string text)
        {
            if (text == null) { return String.Empty; }
            string reverse = String.Empty;
            foreach(char c in text){
                reverse = c + reverse;
            }
            return reverse;
        }

        /// <summary>
        /// Reverse the input string
        /// <remarks>
        /// (this method uses the Array.Reverse method) 
        /// </remarks>
        /// </summary>
        /// <param name="inputString">The string to be reversed</param>
        /// <returns>The reversed string</returns>
        public static string ReverseStringArray(string text)
        {
            if (text == null) { return String.Empty; }
            char[] array = text.ToCharArray();
            Array.Reverse(array);
            return (new string(array));
        }

        /// <summary>
        /// Generates a random string of characters of the specified length
        /// </summary>
        /// <param name="inputString">The length of the string to be generated</param>
        /// <returns>The generated string</returns>
        public static string StringOfLength(int length)
        {
            Random random = new Random();
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < length; i++)
            {
                sb.Append(Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65))));
            }
            return sb.ToString();
        }
    }
}
