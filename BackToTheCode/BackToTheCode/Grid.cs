using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackToTheCode
{
    public class Grid
    {
        public int cols = 35;
        public int rows = 20;
        string[] lines = new string[20];
        string[,] grid; // . = neutral; 0 = me; 1, 2 or 3 = opponent id
        public int myPositionX;
        public int myPositionY;

        public Grid()
        {
            grid = new string[rows, cols];
        }

        public void Initialize(string line, int lineNumber)
        {
            int cptCol = 0;
            foreach (char c in line)
            {
                grid[lineNumber, cptCol++] = c.ToString();
            }
        }

        public override string ToString()
        {
            StringBuilder str = new StringBuilder();
            for (int i = 0; i < rows; i++)
            {
                StringBuilder line = new StringBuilder();
                for (int j = 0; j < cols; j++)
                {
                    line.Append(grid[i,j]);
                }
                str.AppendLine(line.ToString());
                
            }

            return str.ToString();
        }

        public static double GetDistance(double x1, double y1, double x2, double y2)
        {
            double res = Math.Abs(x1 - x2) + Math.Abs(y1 - y2);
            return res;
        }

        public string GetTheNearestNeutralPoint()
        {
            double refDistance = 999;
            int refX = 0;
            int refY = 0;
            for (int y = 0; y < rows; y++)
            {
                for (int x = 0; x < cols; x++)
                {
                    if (grid[y,x] != ".") { continue; }
                    double distance = GetDistance(myPositionX, myPositionY, x, y);
                    if (refDistance > distance) {
                        refDistance = distance;
                        refX = x;
                        refY = y;
                    }
                    if (refDistance == 1) { break; }
                }
                if (refDistance == 1) { break; }
            }
            return String.Format("{0} {1}", refX.ToString(), refY.ToString());
        }
    }
}
